import BasePopup from '../../core/js/basepopup.lib';
import { userLogin, passwordChange } from './user';

//TODO: maybe change this class name to TWPopop (if/when it gets too specific)
class JmgPopup extends BasePopup {
  constructor(props) {
    super(props);
  }

  login() {
    super.show({ path: '/popup-render/login', submitAction: userLogin });
  }

  signUp() {
    super.show({ path: '/popup-render/sign-up' });
  }

  createPassword() {
    super.show({ path: '/popup-render/create-password', submitAction: passwordChange });
  }

  forgotPassword() {
    super.show({ path: '/popup-render/forgot-password' });
  }

  passwordChanged() {
    super.show({ path: '/popup-render/password-changed' });
  }

  resetPasswordRequired() {
    super.show({ path: '/popup-render/reset-password-required' });
  }

  emailVerificationSent() {
    super.show({ path: '/popup-render/verification-mail-sent' });
  }

  emailVerified() {
    super.show({ path: '/popup-render/email-verified' });
  }

  emailVerificationFailed() {
    super.show({ path: '/popup-render/email-verified-failed' });
  }

  emailUnconfirmed() {
    super.show({ path: '/popup-render/email-unconfirmed' });
  }

  updateSuccessful() {
    super.show({ path: '/popup-render/update-successful' });
  }

  // fastSignUp() {
  //   super.show({ path: '/popup-render/fast-sign-up' });
  // }

  // fastSubscribe() {
  //   super.show({ path: '/popup-render/fast-subscribe' });
  // }

  paywall() {
    super.show({ path: '/popup-render/paywall' });
  }
}

export default JmgPopup;
