import { jarallax, jarallaxVideo } from 'jarallax';

(function($) {
  const jarallaxDivs = document.querySelectorAll('.jarallax');
  let hasVideo = false;
  for (let x = 0; x < jarallaxDivs.length; x++) {
    if (jarallaxDivs.item(x).hasAttribute('data-jarallax-video')) {
      hasVideo = true;
      x = jarallaxDivs.length;
    }
  }
  if (hasVideo) {
    jarallaxVideo();
    jarallax(jarallaxDivs, {
      speed: 0.2,
      videoSrc: 'https://www.youtube.com/watch?v=ab0TSkLe-E0'
    });
  } else {
    jarallax(jarallaxDivs, {
      speed: 0.2
    });
  }
})(jQuery);
