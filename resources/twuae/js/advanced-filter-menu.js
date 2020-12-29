(function($) {
  const $body = $('body');
  const $advancedFilter = $body.find('.js-advanced-filter-menu');

  $advancedFilter.on('submit', function submitDestinationsAdvancedFilter(e) {
    e.preventDefault();
    //TODO: get selected elements and search key and fetch results
  });

  $('.js-close-advanced-filter-btn').on('click', function(e) {
    $advancedFilter.removeClass('is-active');
    $body.toggleClass('no-scroll');
  });
  $('.js-advanced-filter-btn').on('click', function() {
    $advancedFilter.toggleClass('is-active');
    $body.toggleClass('no-scroll');
  });
  $('.js-advanced-filter-menu-item-parent button').on('click', function() {
    $(this)
      .toggleClass('is-active')
      .next('.js-advanced-filter-menu-submenu')
      .slideToggle();
  });
})(jQuery);
