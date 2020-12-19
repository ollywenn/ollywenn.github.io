import { jmgAjax } from './helpers';

const $form = document.querySelector('#profile-form');

$form.onsubmit = function(e) {
  e.preventDefault();
  let formData = new FormData(this);
  let url = $form.getAttribute('action');
  jmgAjax({
    url: url,
    method: 'POST',
    data: formData,
    success: function(data) {
      successPostSubmissionActions(data);
    },
    fail: function(data) {
      failedPostSubmissionActions(data);
    }
  });
};

const successPostSubmissionActions = function(data) {
  if (data.email) {
    console.log('email updated?');
    //Popup.emailUpdated.show();
  } else if (data.status) {
    console.log('update success');
    //Popup.successUpdate.open(fromWhereWasTriggered);
  } else {
    console.log('a success but a failure?');
  }
  clearFormErrors();
};

const failedPostSubmissionActions = function(data) {
  clearFormErrors();
  alert(data);
};

const clearFormErrors = () => {
  let errorLabels = document.querySelectorAll('.form-helperText');
  errorLabels.forEach(label => {
    label.innerHTML = '';
  });
};

window.showDetails = anchor => {
  navSwitch(anchor, 'details');
};

window.showSavedArticles = anchor => {
  navSwitch(anchor, 'articles');
};

function navSwitch(activeAnchor, targetDiv) {
  let anchors = document.querySelectorAll('.js-accordion');
  anchors.forEach(anchor => {
    anchor.classList.remove('active');
  });
  activeAnchor.classList.add('active');

  let tabs = document.querySelectorAll('.js-accordion-tab');
  tabs.forEach(tab => {
    tab.classList.remove('show');
  });

  document.querySelector('#' + targetDiv).classList.add('show');
}
