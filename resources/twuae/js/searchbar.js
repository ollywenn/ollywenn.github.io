(function() {
  window.history.replaceState({}, document.title, window.location.pathname + window.location.search);

  let searchBarTimeout = null;
  let searchBarValue = '';
  let scriptAdded = false;
  let searchClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  const $body = document.querySelector('body');
  const $searchToggleButton = $body.querySelector('.js-btn-search-toggle');
  const $searchContainer = $body.querySelector('.js-search-container');
  const $topSearch = $searchContainer.querySelector('.js-search-input');
  const $btnCloseSearch = $searchContainer.querySelector('.js-close-search');
  const $performSearch = $searchContainer.querySelector('.js-btn-search');
  let $googleSearchDiv = null;

  const toggleSearch = () => {
    $searchContainer.classList.toggle('is-active');

    if ($searchContainer.classList.contains('is-active')) {
      $body.classList.add('search-is-active');
      if (!scriptAdded) {
        let scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'text/javascript');
        scriptTag.setAttribute('src', 'https://cse.google.com/cse.js?cx=56abede68cb5f08b5');
        $searchContainer.appendChild(scriptTag);
        scriptAdded = true;
      }
    } else {
      $body.classList.remove('search-is-active');
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  };

  $searchToggleButton.addEventListener('click', toggleSearch);
  $btnCloseSearch.addEventListener('click', toggleSearch);

  // Attache quick search functionality to the top search bar
  $topSearch.addEventListener('focus', function() {
    $googleSearchDiv = $googleSearchDiv || $searchContainer.querySelector('#___gcse_0');
  });
  $topSearch.onkeydown = function() {
    searchBarValue = $(this).val();
  };
  $topSearch.onkeyup = function(e) {
    let searchVal = $(this).val();

    clearTimeout(searchBarTimeout);
    if (e.key === 'Enter') {
      e.preventDefault();
      window.location = '#gsc.tab=0&gsc.q=' + toSnakeCase(searchVal) + '&gsc.page=1';
      $googleSearchDiv.classList.remove('is-active');
    } else {
      searchBarTimeout = setTimeout(function () {
        window.location = '#gsc.tab=0&gsc.q=' + toSnakeCase(searchVal) + '&gsc.page=1';
        doTagSearch();
      }, 850);
      $googleSearchDiv.classList.add('is-active');
      if (!searchVal) {
        $googleSearchDiv.classList.remove('is-active');
      }
    }
  };

  $performSearch.addEventListener('click', function() {
    window.location = '#gsc.tab=0&gsc.q=' + toSnakeCase($topSearch.value) + '&gsc.page=1';
  });

  document.onkeyup = function (e) {
    if (e.key === 'Escape' && $searchContainer.classList.contains('is-active')) {
      $searchToggleButton.dispatchEvent(searchClickEvent);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  };

  const doTagSearch = () => {
    let element = $('#top-search');
    let searchTarget = $('.js-quick-search-target');
    let searchTerm = element.val();
    if (searchTerm === '') {
      searchTarget.html('');
    } else {
      searchTarget.html('<img src="/img/loading.gif" class="loading">');
      fetch('/quick-search/' + searchTerm)
          .then(response => response.text())
          .then(data => {
            searchTarget.html(data);
          });
    }
  }

  const toSnakeCase = str =>
      str &&
      str
          .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
          .map(x => x.toLowerCase())
          .join('+');
})();
