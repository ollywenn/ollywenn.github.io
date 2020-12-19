import MicroModal from 'micromodal';
import { checkIfUserAlreadyLoggedIn, resetModalFormErrorMessages, jmgAjax } from './helpers';
import { triggerGtagEvent } from './helpers';

(function($) {
  'use strict';

  /**
   * Rendering the popups:
   *
   * GET: /popup-render/login
   * GET: /popup-render/sign-up
   * GET: /popup-render/email-verified
   * GET: /popup-render/verification-mail-sent
   *
   * Expected response:
   * {
   *    "status": true,
   *    "html": "<raw html string><here>"
   * }
   *
   * - OR -
   *
   * Response status 404 when couldn't find the template
   */

  const $btnSubmitLoginForm = $('.js-submit-login');
  const $registerForm = $('#registerForm');
  const $btnSubmitRegisterForm = $('.js-submit-register');
  const $btnLogout = $('.js-btn-logout');
  const $btnProfile = $('.js-btn-profile');

  $btnSubmitLoginForm.on('click', function(e) {
    checkIfUserAlreadyLoggedIn(memberLogin, $(this));
  });

  $btnSubmitRegisterForm.on('click', function(e) {
    e.preventDefault();
    memberRegistration();
  });

  $btnLogout.on('click', function(e) {
    window.location = '/logout';
  });

  function memberLogin() {
    let $loginForm = $('#loginForm');
    let formData = $loginForm.serialize();
    const $btnSubmit = $('.js-submit-login');
    resetModalFormErrorMessages($loginForm.parents('.modal'));

    $btnSubmit.addClass('is-loading');

    $.ajax({
      url: $loginForm.attr('action'),
      type: 'POST',
      data: formData,
      dataType: 'json',
      success: function(data, status) {
        triggerGtagEvent($btnSubmit);
        if (data.hasOwnProperty('open')) {
          MicroModal.close('popup-login');
          switch (data.open) {
            case 'fpp':
              Popup.forgotPasswordProblem.open(); //TODO: does it apply for TW?
              break;
            case 'fpf':
              Popup.forgottenPasswordFast.open(); //TODO: does it apply for TW?
              break;
          }
        } else {
          const next = $loginForm.find('input[name="next"]');

          if (next.length > 0) {
            window.location = window.location.origin + window.location.pathname;
          } else {
            Popup.emailVerificationSent();
          }
        }
      },
      error: function(data, status) {
        $btnSubmit.removeClass('is-loading');
        console.error(data.responseText);
        if (data.responseText === 'Unconfirmed email address') {
          Popup.emailUnconfirmed();
        } else if (data.responseText === 'Password Reset Required') {
          Popup.forgotPassword();
          //M.Modal.getInstance($('#reset-password-required')).open();
          //temporary fix until we have a new modal
          $('#password-holder .helper-text').html('You need to setup a new password to use the new Caterer website.');
        } else {
          failedAjax(data, status, 'loginForm');
          $btnSubmit.blur();
        }
      }
    });

    return false;
  }

  function memberRegistration() {
    let $registerForm = $('#registerForm');
    let formData = $registerForm.serialize();
    resetModalFormErrorMessages($registerForm.parents('.modal'));

    $btnSubmitRegisterForm.addClass('is-loading');

    $.ajax({
      url: $registerForm.attr('action'),
      type: 'POST',
      data: formData,
      dataType: 'json',
      success: function(data) {
        if (data.status) {
          triggerGtagEvent($btnSubmitRegisterForm);
          MicroModal.show('popup-sign-up'); //???
          MicroModal.close('popup-sign-up'); //???
          if (data.hasOwnProperty('open')) {
            switch (data.open) {
              case 'fpp':
                Popup.forgotPasswordProblem.open();
                break;
              case 'fpf':
                Popup.forgottenPasswordFast.open();
                break;
            }
          } else {
            const next = $registerForm.find('input[name="next"]');
            if (next.length > 0) {
              window.location = window.location.origin + window.location.pathname;
            } else {
              setTimeout(function() {
                Popup.emailVerificationSent();
              }, 250);
            }
          }
        } else {
          $registerForm.find('.form-submission-error span').html(data.message);
        }
      },
      error: function(data, status) {
        $btnSubmitRegisterForm.removeClass('is-loading');
        console.error(data.responseText);
        if (data.responseText === 'Unconfirmed email address') {
          Popup.emailUnconfirmed();
        } else if (data.responseText === 'Password Reset Required') {
          Popup.forgotPassword();
          //M.Modal.getInstance($('#reset-password-required')).open();
          //temporary fix until we have a new modal
          $('#password-holder .helper-text').html('You need to setup a new password to use the new Caterer website.');
        } else {
          failedAjax(data, status, 'loginForm');
          $btnSubmitRegisterForm.blur();
        }
      }
    });

    return false;
  }

  function verificationCheck() {
    let token = '?723aa82a83c278d5e7e7be9b109b406a=';
    if (window.location.href.indexOf(token) > 0) {
      let stateObj = {};
      history.replaceState(stateObj, document.title, location.protocol + '//' + location.host + location.pathname);
      MicroModal.show('popup-email-verified');
    }
  }

  verificationCheck();
})(jQuery);

//TODO: refactor the existing user.js code down here
export const userLogin = () => {
  let $email = document.getElementById('login-email-input').value;
  let $pwd = document.getElementById('login-password-input').value;
  checkIfUserAlreadyLoggedIn(
    jmgAjax({
      url: '/login',
      method: 'POST',
      data: { email: $email, password: $pwd },
      success: function() {
        location.href = location.href;
      },
      fail: function() {
        console.log('loggin error');
      }
    })
  );
};

export const passwordChange = () => {
  let $pwd1 = document.getElementById('password_create').value;
  let $pwd2 = document.getElementById('password_confirmation_create').value;
  if ($pwd1 != $pwd2) {
    alert('Password and confirmation do not not match!');
    return false;
  }
  const $form = document.querySelector('#createPasswordForm');
  let url = $form.getAttribute('action');
  jmgAjax({
    url: url,
    method: 'POST',
    data: { password_field: $pwd1, password_confirmation: $pwd2 },
    success: function() {
      Popup.passwordChanged();
    },
    fail: function() {
      alert('Password update failed.');
    }
  });
};
