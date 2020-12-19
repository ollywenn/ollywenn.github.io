import { lazyLoadImages } from '../../core/js/helpers';
import { globalState } from './tw-global-state';

export function checkIfUserAlreadyLoggedIn(callback, $element = null) {
  if ($element !== null) {
    $element.addClass('is-loading');
  }
  // Check if user is logged in already
  $.get('/auth-check', function(response) {
    if (response !== false) {
      window.location = window.location.origin + window.location.pathname;
    } else {
      if (callback !== undefined) {
        callback();
      }
    }
  });
}

export function resetModalFormErrorMessages(modal) {
  const $modal = $(modal);
  // Recursive to tackle all modals if the modal is killed by clicking on the underlay (or if no modal elem provided)
  if (typeof modal === 'undefined') {
    const $modals = $('.modal');

    $modals.each(function() {
      resetModalFormErrorMessages($(this));
    });
  }

  // Remove errors
  let $helpers = $modal.find('form .helper-text');

  if ($helpers.length > 0) {
    $helpers.each(function() {
      $(this)
        .attr('data-error', '')
        .attr('data-success', '')
        .html('');
    });
  }

  let errorForm = null;
  if ($modal.find('.errorMessageContainer').length > 0) {
    errorForm = $modal.find('.errorMessageContainer');
  } else if ($modal.find('.errorMessage').length > 0) {
    errorForm = $modal.find('.errorMessage');
  }
  if (errorForm !== null) {
    errorForm.html('');
  }
}

export function triggerGtagEvent($button) {
  const action = $button.data('gtag-action');
  const category = $button.data('gtag-category');
  const label = $button.data('gtag-label');
  if (action !== undefined && category !== undefined && label !== undefined) {
    // gtag('event', action, {
    //     event_category: category,
    //     event_label: label,
    //     value: 1
    // });
  }
}

export const jmgAjax = properties => {
  if (typeof properties != 'object') {
    console.error('Incomming properties must be an object or array');
    return false;
  }
  if (!('url' in properties)) {
    console.error("Oh come'on now... without a URL property? you can do better than that");
    return false;
  }
  let ajax = {
    url: properties.url,
    method: 'POST',
    data: [],
    success: null,
    fail: null
  };
  if ('method' in properties) {
    ajax.method = properties.method;
  }
  if ('data' in properties) {
    ajax.data = properties.data;
  }
  if ('success' in properties) {
    ajax.success = properties.success;
  }
  if ('fail' in properties) {
    ajax.fail = properties.fail;
  }
  //@todo this can be refactored to that fetch or whatever
  //this now allows us to have the ajax logic in one place and have the simple calling
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
        if (typeof ajax.success == 'function') {
          ajax.success(xhttp.response);
        }
        return true;
      } else if (this.status > 300) {
        if (typeof ajax.fail == 'function') {
          ajax.fail(xhttp.response);
        }
        return false;
      }
    }
  };
  let data = '';
  //so we are checking whether we've got a string or an object
  if (typeof ajax.data == 'string') {
    data = ajax.data;
  } else {
    // if it's an object we have to parse it... but if it's a FormData we need to deal with it differently
    if (ajax.data instanceof FormData) {
      for (var p of ajax.data) {
        if (data != '') {
          data += '&';
        }
        data += p[0] + '=' + p[1];
      }
    } else {
      //good old ordinary object :)
      Object.keys(ajax.data).forEach(key => {
        if (data != '') {
          data += '&';
        }
        data += key + '=' + ajax.data[key];
      });
    }
  }

  xhttp.open(ajax.method, ajax.url, true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(data);
};

export function attachLoadMoreActions(globalState) {
  const $btnLoadMore = $('.js-btn-load-more');
  const loadMoreFinishedEvent = new Event('loadMoreFinished');

  $btnLoadMore.on('click', function() {
    let url = window.location.href;
    const lastOffset = $('.js-article-template')
      .last()
      .offset().top;
    const total = $btnLoadMore.attr('data-limit');
    const currentNumber = $btnLoadMore.attr('data-page');
    const nextNumber = parseInt(currentNumber) + 1;
    const $appendTarget = $('.js-loadmore-target');

    $btnLoadMore.addClass('is-loading');

    if (nextNumber > total) {
      $btnLoadMore.hide();
    } else {
      url = url + '?page=' + nextNumber;

      $.get(url, function(data) {
        if (data.articles !== undefined && data.articles !== null) {
          $.each(data.articles, function(index, article) {
            $appendTarget.append(generateClonedArticleWithData(article));
          });
        }
        $btnLoadMore.attr('data-limit', data.last_page);
        $btnLoadMore.attr('data-page', nextNumber);
        $btnLoadMore.removeClass('is-loading');
        window.dispatchEvent(loadMoreFinishedEvent);

        if (nextNumber + 1 > total) {
          $btnLoadMore.hide();
        }

        $([document.documentElement, document.body]).animate(
          {
            scrollTop: lastOffset
          },
          0
        );

        setTimeout(function() {
          globalState.loadableImages = lazyLoadImages(document.querySelectorAll('[data-bg]'));
        }, 350);
      }).fail(function() {
        $btnLoadMore.removeClass('is-loading');
        $btnLoadMore.hide();
      });
    }
  });
}

export function generateClonedArticleWithData(article) {
  let $template = $('.js-article-template')
    .first()
    .clone();

  //FIXME: the following things need to be changed. The endpoint should only return one default size

  $template
    .find('a > img')
    .first()
    .attr('src', article.thumbnail);
  $template
    .find('.articleSnippet-title > a')
    .first()
    .html(article.title);

  $template.find('a').each(function(index, element) {
    $(element).attr('href', article.full_slug);
  });

  return $template;
}
