import MicroModal from 'micromodal';
import { isFunction, attachEventsOnFormElements } from './helpers';

class BasePopup {
  constructor(props) {
    this.id = props.id ? props.id : 'default-popup';
  }

  getId() {
    return this.id;
  }

  show(props) {
    const popupId = props.id ? props.id : this.id;

    MicroModal.show(popupId);
    this.fetch(props);

    if (props.callbackFn) {
      props.callbackFn();
    }
  }

  hide(props = {}) {
    const popupId = props.id ? props.id : this.id;
    const e = window.event;

    e.stopPropagation();
    MicroModal.close(popupId);
    this.removePopupContents(popupId);
  }

  replace(props) {
    this.hide(props);
    this.show(props);
  }

  //TODO: implement a localStorage feature to avoid hitting the endpoints repeatedly
  fetch(props) {
    const url = props.path ? props.path : '/popup-render/login';
    const popupId = props.id ? props.id : this.id;
    const myRequest = new Request(url);
    const submitAction = props.submitAction ? props.submitAction : null;

    fetch(myRequest)
      .then(function(response) {
        if (!response.ok) {
          throw new Error(`HTTP error on fetching ${url}! status: ${response.status}`);
        }
        return response.json();
      })
      .then(function attachingPopupContents(response) {
        const popupEl = document.getElementById(popupId).childNodes[1];

        popupEl.innerHTML = response.html;

        document.querySelector('.modal-container').addEventListener('click', function(e) {
          e.stopPropagation();
        });

        attachEventsOnFormElements('.form input, .form textarea');

        // if there's a submitAction, attach to the submit button
        if (submitAction && isFunction(submitAction)) {
          const formSubmit = popupEl.querySelector('[type="submit"]');

          formSubmit.addEventListener('click', function onFormSubmit(e) {
            formSubmit.classList.add('is-loading');
            e.preventDefault();
            submitAction();
          });
        }
      });
  }

  removePopupContents(popupId) {
    const popupEl = document.getElementById(popupId).childNodes[1];

    popupEl.innerHTML = '';
  }
}

export default BasePopup;
