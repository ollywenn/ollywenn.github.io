let isResizing = false;
let timer = null;
let preloaded = false;

function startResizeTracking() {
  window.addEventListener('resize', function() {
    if (isResizing == false) {
      let blocks = document.querySelectorAll('[data-bg]');
      blocks.forEach(image => {
        if (isInViewport(image)) {
          if (image.classList.contains('js-img') && image.src != '' && image.src.indexOf('/transp.png') == -1) {
            image.style.backgroundImage = 'url(' + image.src + ')';
            if (image.classList.contains('js-show-background')) {
              image.classList.add('support-background-for-resize');
            }

            image.src = '/img/transp.png';
          }
        }
      });
    }
    isResizing = true;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(
      function() {
        isResizing = false;

        imageLazyLoader(document.querySelectorAll('[data-bg]'));
      },
      450,
      event
    );
  });
}

export function imageLazyLoader(loadableImages) {
  loadCompositImages();
  if (timer === null) {
    startResizeTracking();
  }
  if (isResizing) {
    return loadableImages;
  }
  loadableImages.forEach(image => {
    if (isInViewport(image)) {
      loadOneImage(image);
    }
  });

  if (!preloaded) {
    setTimeout(function() {
      preLoadLowQualityImages();
    }, 2500);
    preloaded = true;
  }

  return loadableImages;
}

function loadOneImage(image) {
  let theImage = getExpectedImageSize(image);
  if (
    image.getAttribute('data-preSize') != theImage ||
    (image.classList.contains('js-img') && image.src.indexOf('transp.png') > 0)
  ) {
    image.setAttribute('data-preSize', theImage);
    if (image.classList.contains('js-img')) {
      if (image.src == '') {
        var img = new Image();
        img.src = theImage;
        img.onload = function() {
          if (image.classList.contains('js-show-background')) {
            image.style.display = 'block';
          }
          image.style.backgroundImage = 'url(' + img.src + ')';
          loadHQImage(image, theImage);
        };
      } else {
        loadHQImage(image, theImage);
      }
    } else {
      if (image.style.backgroundImage == '') {
        var img = new Image();
        img.src = theImage;
        img.onload = function() {
          image.style.backgroundImage = 'url(' + img.src + ')';
          loadHQImage(image, theImage);
        };
      } else {
        loadHQImage(image, theImage);
      }
    }
  }
}

function getExpectedImageSize(image) {
  let theImage = image.getAttribute('data-bg');
  let theSize = '';
  //NOT
  if (
    !image.parentNode.classList.contains('image-wrapper') &&
    !image.parentNode.classList.contains('alpha-article') &&
    !image.classList.contains('js-dont-resize')
  ) {
    let height = parseInt(image.clientHeight);
    let width = parseInt(image.clientWidth);
    if (width == 0 || height == 0) {
      if (width > height) {
        theSize = 'w:' + width;
      } else {
        //in case both are zero - we at least try
        if (height == 0) {
          height = 300;
        }
        theSize = 'h:' + height;
      }
    } else {
      theSize = 'w:' + width + ',h:' + height;
    }
    return theImage.replace('droids', theSize);
  }
  //TC
  if (image.parentNode.classList.contains('image-wrapper') || image.parentNode.classList.contains('alpha-article')) {
    let height = parseInt(image.parentNode.clientHeight);
    let width = parseInt(image.parentNode.clientWidth);
    if (width == 0 || height == 0) {
      if (width > height) {
        theSize = 'w:' + width;
      } else {
        //in case both are zero - we at least try
        if (height == 0) {
          height = 300;
        }
        theSize = 'h:' + height;
      }
    } else {
      theSize = 'w:' + width + ',h:' + height;
    }
    theImage = theImage.replace('droids', theSize);
  }
  return theImage;
}

function loadHQImage(image, theImage) {
  if (
    image.getAttribute('data-bg').indexOf('quality=value:15') > 0 ||
    (image.classList.contains('js-img') && image.src.indexOf('transp.png') > 0)
  ) {
    var imgHQ = new Image();
    imgHQ.src = theImage.replace('quality=value:15', 'quality=value:85');
    imgHQ.onload = function() {
      if (image.classList.contains('js-img')) {
        image.src = imgHQ.src;
        if (image.classList.contains('js-show-background')) {
          image.style.display = 'block';
        }
        image.classList.remove('support-background-for-resize');
      } else {
        image.style.backgroundImage = 'url(' + imgHQ.src + ')';
      }
    };
  }
}

function preLoadLowQualityImages() {
  if (isResizing) {
    setTimeout(function() {
      preLoadLowQualityImages();
    }, 2000);
    return '';
  }
  let loadableImages = document.querySelectorAll('[data-bg]');
  loadableImages.forEach(image => {
    if (image.style.backgroundImage == '' || (image.classList.contains('js-img') && image.src == '')) {
      preLoadLowQualityImage(image);
    }
  });
}

function loadCompositImages() {
  if (isResizing) {
    setTimeout(function() {
      loadCompositImages();
    }, 2000);
    return '';
  }
  let loadableImages = document.querySelectorAll('[data-src]');
  loadableImages.forEach(image => {
    if (image.src == '') {
      preLoadLowQualityImage(image, true);
      image.removeAttribute('data-src');
    }
  });
}

function preLoadLowQualityImage(image, imgTag) {
  if (imgTag === true) {
    let theSrc = image.getAttribute('data-src');
    theSrc = theSrc.replace('quality=value:15', 'quality=value:60');
    image.src = theSrc;
  } else {
    let theImage = getExpectedImageSize(image);
    if (image.getAttribute('data-bg').indexOf('quality=value:15') > 0) {
      image.classList.add('blurTransition');
    }
    if (image.classList.contains('js-img')) {
      image.src = theImage;
    } else {
      image.style.backgroundImage = 'url(' + theImage + ')';
    }
  }
}

function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= -320 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight + 450 || document.documentElement.clientHeight + 450) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
