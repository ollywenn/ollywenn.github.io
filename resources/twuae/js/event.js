(function($) {
  $('.js-submit').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.success-modal-wrapper').addClass('is-active');
  });
  $('.success-modal').on('click', function(e) {
    e.stopPropagation();
  });
  $('.success-modal-wrapper, .btn--close').on('click', function(e) {
    e.stopPropagation();
    $('.success-modal-wrapper').removeClass('is-active');
  });
})(jQuery);
