(function($) {
  $('.js-quick-filter-menu-parent').on('click', function() {
    const $this = $(this);
    const $activeSubMenuItems = $this
      .parent('.article-quickFilterMenuParent')
      .siblings('.article-quickFilterMenuParent')
      .find('.is-active');

    console.log($activeSubMenuItems);

    $activeSubMenuItems.each(function(i, item) {
      $(item).removeClass('is-active');
    });

    $this
      .toggleClass('is-active')
      .next('.article-quickFilterMenuSubmenu')
      .toggleClass('is-active');
  });

  $('.js-quick-filter-submenu-close-btn').on('click', function() {
    $(this)
      .parent('.article-quickFilterMenuSubmenu')
      .removeClass('is-active')
      .siblings('.js-quick-filter-menu-parent.is-active')
      .removeClass('is-active');
  });
})(jQuery);
