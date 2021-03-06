import MicroModal from 'micromodal';
import Swiper, { Autoplay } from 'swiper';
import JmgPopup from './jmg-popup.lib';
import { imageLazyLoader } from './../../core/js/imageLoader.js';
import { attachEventsOnFormElements, fixFormFieldHeight } from './../../core/js/helpers.js';
import { globalState } from './tw-global-state';
import init from './main-nav.js';
import initSearchBar from './searchbar.js';
import './user.js';
import './analytics.js';
Swiper.use([Autoplay]);

(function($) {
  'use strict';
  // include html snippet
  var includestack = 0;

  function includeHTML(onload) {
    /// quick hack to pull in "included" compoents. once complete, called includesDone
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName('*');

    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute('include');
      if (file) {
        includestack++;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              elmnt.innerHTML = 'Page not found.';
            }
            elmnt.removeAttribute('include');
            includestack--;
            includeHTML(onload);
          }
        };
        xhttp.open('GET', file, true);
        xhttp.send();
        return;
      }
    }
    if (includestack == 0) onload();
  }

  window.addEventListener('load', function() {
    includeHTML(function() {
      /// quick hack to pull in "included" compoents. once complete, called includesDone

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

      init();
      initSearchBar();
      const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: { delay: 8000, disableOnInteraction: false },
        breakpoints: {
          375: {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 40,
            autoplay: { delay: 8000, disableOnInteraction: false }
          }
        }
      });
    });
  });
})(jQuery);
