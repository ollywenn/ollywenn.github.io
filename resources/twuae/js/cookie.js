(function($) {
  //TODO: remove jQuery
  $('.section--cookies .btn--accept').on('click', function acceptCookies() {
    const $cookieWidget = $('.section--cookies');
    const $btnCookie = $cookieWidget.find('.btn--accept');
    $btnCookie.addClass('is-loading');

    $.ajax({
      url: $btnCookie.attr('data-url'),
      type: 'GET',
      data: {},
      success: function(data) {
        if (data.status === true) {
          $cookieWidget.addClass('is-accepted');
        } else {
          $btnCookie.text('Try again');
        }
      }
    });
  });
})(jQuery);
