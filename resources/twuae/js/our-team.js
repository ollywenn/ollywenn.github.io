(function($) {
  $('.js-our-team-filter .filter-item').on('click', function onOurTeamFilterClick() {
    const $this = $(this);
    const $targetTeam = $(`.${$this.attr('data-target')}`);

    $this.toggleClass('is-active');
    $targetTeam.toggleClass('is-active');
  });
})(jQuery);
