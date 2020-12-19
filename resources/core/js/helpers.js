//Available for all projects
import { imageLazyLoader } from './imageLoader';

export const isIE11 = () => !!window.MSInputMethodContext && !!document.documentMode;
export const trimNumberUnit = s => parseInt(s);

export function cleanTitle(str) {
  return str.split(': ')[1].trim();
}

export const getParameterByName = (name, url = window.location.href, defaultVaLue = null) => {
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);

  if (!results) return defaultVaLue;
  if (!results[2]) return '';

  return Number(decodeURIComponent(results[2].replace(/\+/g, ' ')));
};

export function snippetText(str, charLength = 120) {
  return str
    .replace(/[\n\r]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .slice(0, charLength)
    .trim();
}

export function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
//TODO: write test for this
export async function getDataFromStorage(url, key, interval = 600000) {
  if (storageAvailable('localStorage')) {
    // if data not on storage or if data older than the limit (default 10min in ms) populate storage
    if (
      !localStorage.getItem(key) ||
      JSON.parse(localStorage.getItem(key)).lastUpdated + Number(interval) < Date.now()
    ) {
      await populateStorage(url, key);
    }

    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)).data : null;
  } else {
    // NO LOCAL STORAGE AVAILABLE so hit the endpoint
    let request = new Request(url);
    const resp = fetch(request, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network failed to fetch the url: ', url);
        }
        return response.text();
      })
      .catch(error => console.error(error));
  }
}

export async function populateStorage(url, key) {
  try {
    let request = new Request(url);
    const resp = await fetch(request, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });

    if (!resp.ok) {
      throw new Error('Network failed to fetch the url: ', url);
    }

    const data = await resp.text();
    const finalData = {
      lastUpdated: Date.now(),
      data: data
    };

    localStorage.setItem(key, JSON.stringify(finalData));
  } catch (error) {
    throw new Error('Network failed to fetch ' + key + ' url => ' + url, error);
  }
}

export function lazyLoadImages(images) {
  return imageLazyLoader(images);
}
export function getUrlParam(name) {
  var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results == null) {
    return null;
  }
  return decodeURI(results[1]) || 0;
}

export function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

export function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function checkCookie(cname) {
  var value = getCookie(cname);
  if (value != '') {
    return true;
  }
  return false;
}

export function renderNode($node, data) {
  $node.html(data);
}

export function extractSizeFromUrl(url) {
  let found = '0x0';
  if (typeof url !== typeof undefined) {
    let regex = /w\:([0-9]*),h\:([0-9]*)/g;
    found = url.match(regex);
    if (found.length > 0) {
      found = found[0];
      found = found.split(',');
      found = found[0].replace('w:', '') + 'x' + found[1].replace('h:', '');
    }
  }
  return found;
}

export function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

// implies html structure of .form-field as a wrapper for a label + input
export const attachEventsOnFormElements = selector => {
  const formInputs = document.querySelectorAll(selector);

  // bind input events
  formInputs.forEach(el => {
    const formField = el.closest('.form-field');
    const formLabel = el.previousElementSibling;

    el.addEventListener('focus', function inputFocus() {
      if (formLabel.classList.contains('form-label')) {
        formLabel.classList.add('is-active');
      }
    });

    el.addEventListener('blur', function inputBlur() {
      if (!this.value.length) {
        if (formLabel.classList.contains('form-label') && formLabel.classList.contains('is-active')) {
          formLabel.classList.remove('is-active');
        }
      }
    });
    // this fixes the height of the input wrapper in case the label is too long
    //TODO: check MutationObserver to listen to css changes (and drop possible on resize listeners)
    if (formLabel && formField.dataset.strlen > 35) {
      formField.style.height = `${formLabel.offsetHeight + 5}px`;
    }
  });
};

// implies html structure of .form-field as a wrapper for a label + input
export const fixFormFieldHeight = selector => {
  const formInputs = document.querySelectorAll(selector);
  formInputs.forEach(el => {
    const formField = el.closest('.form-field');
    const formLabel = el.previousElementSibling;

    // this fixes the height of the input wrapper in case the label is too long
    //TODO: check MutationObserver to listen to css changes (and drop possible on resize listeners)
    if (formLabel && formField.dataset.strlen > 35) {
      formField.style.height = `${formLabel.offsetHeight + 5}px`;
    }
  });
};
