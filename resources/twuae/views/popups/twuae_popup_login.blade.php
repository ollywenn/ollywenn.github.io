<div class="modal-container modal-container--login" role="dialog" aria-modal="true" aria-labelledby="popup-title">
    <header class="modal-header">
        <h2 class="modal-title" id="popup-title">{{ __('db.login.heading') }}</h2>
        <button class="btn btn--modalClose" aria-label="Close modal" onclick="Popup.hide()">Close</button>
    </header>
    <div class="modal-content" id="popup-login-content">
        <form class="form" method="POST" action="@if (Route::has('login')){{ route('login') }}@endif" id="loginForm"
            autocomplete="off">
            @csrf
            <div class="form-field">
                <label class="form-label" for="login-email-input">{{__('db.label.email')}}<sup
                        class="required">*</sup></label>
                <input type="text" id="login-email-input" name="email" class="text" required>
                <small class="form-helperText form-helperText--error" data-error="{{__('db.label.invalid_email')}}"
                    data-success=""></small>
            </div>
            <div class="form-field">
                <label class="form-label" for="login-password-input">{{__('db.label.password')}}<sup
                        class="required">*</sup></label>
                <input type="password" id="login-password-input" name="password" class="text" required>
                <small class="form-helperText form-helperText--error" data-error="" data-success=""></small>
            </div>
            <div class="form-field input-hidden">
                <input type="hidden" class="google_recaptcha_token" name="google_recaptcha_token" />
                <small class="form-helperText form-helperText--error" data-error="Google Captcha"
                    data-success=""></small>
            </div>
            <button type="submit" class="btn btn--submit js-submit-login" data-gtag-action="pressed_login_button"
                data-gtag-category="login_popup" data-gtag-label="User attempts to login"
                aria-label="{{__('db.buttons.login')}}">
                {{__('db.buttons.login')}}
            </button>
            <div class="form-extraInfo">
                <p>This Site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy"
                        target="_blank" rel="noreferrer">Google Privacy Policy</a> and <a
                        href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of
                        Service</a></p>
                <p><a onclick="Popup.forgotPassword()" class="js-trigger-gtag btn btn--forgotPassword"
                        data-gtag-action="pressed_forgot_password_link" data-gtag-category="login_popup"
                        data-gtag-label="Pressed forgot password link on the Login Popup"
                        data-trigger-g="#resetPasswordForm">Forgot my password</a></p>
            </div>
        </form>
    </div>
    <footer class="modal-footer">
        <p class="account-text"> Don't have an Account? <button onclick="Popup.signUp()" class="js-trigger-gtag btn"
                data-gtag-action="pressed_registration_link" data-gtag-category="login_popup"
                data-gtag-label="Pressed registration link on the Login Popup">Sign
                Up</button></p>
    </footer>
</div>
