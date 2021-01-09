import { globalState } from './tw-global-state';
import './external/sticky-IE-Fix.min.js'; //IE shim for position sticky

export default function init() {
  const $window = $(window);
  const $body = $('body');
  const $mainHeader = $('.js-main-header');
  const $mainNav = $mainHeader.find('.js-main-nav');
  const $btnToggleNav = $('.js-btn-toggle-menu');
  const $menuParent = $mainNav.find('.js-menu-parent');
  const $mainNavParentLink = $mainNav.find('.js-menu-parent > a, .js-menu-parent > button');
  const $btnProfile = $('.js-btn-profile');
  const $extraMenu = $('.js-extra-menu');
  let mainHeaderOffsetTop = $mainHeader.offset().top;
  let mainHeaderHeight = $mainHeader.outerHeight();
  let mainNavOffsetTop = $mainNav.offset().top;

  if ($window.width() < 980) {
    $menuParent.each(function() {
      const $this = $(this);
      if ($this.hasClass('is-current')) {
        $this.addClass('is-active');
      }
    });
  }

  // This function has been replaced with a css alternative, due to performance (see_header.scss)
  //$window.on('scroll', fixHeaderPos);
  //function fixHeaderPos() {
  // if ($window.scrollTop() >= mainHeaderOffsetTop && !$body.hasClass('no-scroll')) {
  //   $body.addClass('sticky-nav');
  //   if ($window.width() < globalState.screenSizes.lg) {
  //     $body.css('padding-top', mainHeaderHeight);
  //   } else {
  //     //FIXME: refactor this to only show sticky menu on lg if you scroll up some pixels otherwise hidden
  //     let headerNavDiff = mainNavOffsetTop - mainHeaderOffsetTop;
  //     let windowNavDiff = mainNavOffsetTop - $window.scrollTop() - headerNavDiff;
  //     let translateValue = 0;
  //     if ($window.scrollTop() >= mainNavOffsetTop) {
  //       translateValue = -windowNavDiff;
  //       if (windowNavDiff < headerNavDiff) {
  //         translateValue = -headerNavDiff;
  //       }
  //     } else {
  //       translateValue = windowNavDiff;
  //     }
  //     $body.css('padding-top', mainHeaderHeight);
  //     $mainHeader.css('transform', `translate(-50%, ${translateValue}px)`);
  //   }
  // } else {
  //   $body.removeClass('sticky-nav').css('padding-top', 0);
  //   $mainHeader.css('transform', `translate(-50%, 0)`);
  // }
  //}

  $window.on('resize', function() {
    mainNavOffsetTop = $mainNav.offset().top;
    mainHeaderHeight = $mainHeader.outerHeight();

    if ($window.width() > globalState.screenSizes.lg) {
      $menuParent.each(function() {
        $(this).removeClass('is-active');
      });
    }
  });

  $btnToggleNav.on('click', function() {
    if ($window.width() <= globalState.screenSizes.lg) {
      $(this).toggleClass('is-active');
      $mainNav.toggleClass('is-active');
      $body.toggleClass('no-scroll');
      $extraMenu.removeClass('is-active');
    }
  });

  $mainNavParentLink.on('click', function() {
    const windowWidth = $window.width();
    if (windowWidth <= globalState.screenSizes.lg) {
      const $menuParent = $(this).parent('.js-menu-parent');

      if (windowWidth < globalState.screenSizes.smd) {
        if ($menuParent.hasClass('is-active')) {
          $menuParent.removeClass('is-active');
        } else {
          $menuParent.addClass('is-active');
        }
      } else if (windowWidth >= globalState.screenSizes.smd && windowWidth < globalState.screenSizes.xmd) {
        $('.js-menu-parent.is-active').removeClass('is-active');
        $menuParent.addClass('is-active');
      } else if (windowWidth >= globalState.screenSizes.xmd && windowWidth <= globalState.screenSizes.lg) {
        $menuParent.siblings('.is-active').removeClass('is-active');
        $menuParent.toggleClass('is-active');
      }
    }
  });

  $btnProfile.on('click', function(e) {
    if ($window.width() < globalState.screenSizes.xmd) {
      e.preventDefault();
      $extraMenu.toggleClass('is-active');
      $mainNav.removeClass('is-active');
      $btnToggleNav.removeClass('is-active');
      $body.toggleClass('no-scroll');
    }
  });

  $extraMenu.on('click', 'button', function() {
    $extraMenu.removeClass('is-active');
  });
}
