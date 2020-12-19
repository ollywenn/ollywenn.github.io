(function($) {
  $('.js-btn-toggle-events').on('click', function btnEventsList() {
    const $this = $(this);
    const target = $this.attr('data-target');

    $this
      .removeClass('is-active')
      .siblings('.btn')
      .addClass('is-active');

    $('.' + target)
      .addClass('is-active')
      .siblings('.js-related-events-view.is-active')
      .removeClass('is-active');
  });
})(jQuery);
