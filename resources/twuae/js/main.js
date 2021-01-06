import MicroModal from 'micromodal';
import JmgPopup from './jmg-popup.lib';
import { imageLazyLoader } from './../../core/js/imageLoader.js';
import { attachEventsOnFormElements, fixFormFieldHeight } from './../../core/js/helpers.js';
import { globalState } from './tw-global-state';

// if IE, create <link> to critical
var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);
if (isIE) {
  var headID = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = '../../public/twuae/css/critical-bundle.css';
  headID.appendChild(link);
}

(function($) {
  'use strict';

  require('./main-nav');
  require('./searchbar');

  $('.js-btn-latest-articles').on('click', function btnLatestArticles() {
    const $this = $(this);
    const target = $this.attr('data-target');
    // debugger;
    $this
      .addClass('is-active')
      .siblings('.btn')
      .removeClass('is-active');

    $('.' + target)
      .addClass('is-active')
      .siblings('.js-latest-articles-list.is-active')
      .removeClass('is-active');
  });

  MicroModal.init({
    onShow: () => {
      $('body').addClass('no-scroll');
    },
    onClose: () => {
      $('body').removeClass('no-scroll');
    },
    disableScroll: true
  });

  if (document.querySelector('.form')) {
    attachEventsOnFormElements('.form input, .form textarea');
  }

  $(window).on('resize', function resizeWindowHappening() {
    //TODO: revisit this, maybe use rxjs or MutationObserver?
    fixFormFieldHeight('.form input, .form textarea');
  });

  window.Popup = new JmgPopup({ id: 'global-popup' });

  $(window).on('scroll', function() {
    if (!globalState.scrollPause) {
      globalState.scrollPause = true;
      setTimeout(function() {
        globalState.loadableImages = imageLazyLoader(globalState.loadableImages);
        globalState.scrollPause = false;
      }, 125);
    }
  });
  globalState.loadableImages = imageLazyLoader(document.querySelectorAll('[data-bg]'));
})(jQuery);
