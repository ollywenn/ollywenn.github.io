<div class="modal-container modal-container--signUp" role="dialog" aria-modal="true" aria-labelledby="popup-title">
    <header class="modal-header">
        <h2 class="modal-title" id="popup-title">Sign up</h2>
        <button class="btn btn--modalClose" aria-label="Close modal" onclick="Popup.hide()"></button>
    </header>
    <div class="modal-content" id="popup-sign-up-content">
        <form class="form" method="POST" action="@if (Route::has('register')){{ route('register') }}@endif"
            id="registerForm" autocomplete="off">
            @csrf
            <div class="form-field">
                <label class="form-label" for="firstName_register">{{__('db.label.first_name')}}<sup
                        class="required">*</sup></label>
                <input type="text" id="firstName_register" name="firstName" class="text" required>
                <small class="form-helperText form-helperText--error" data-error="" data-success=""></small>
            </div>
            <div class="form-field">
                <label class="form-label" for="surname_register">{{__('db.label.last_name')}}<sup
                        class="required">*</sup></label>
                <input type="text" id="surname_register" name="surname" class="text" required>
                <small class="form-helperText form-helperText--error" data-error="" data-success=""></small>
            </div>
            <div class="form-field">
                <label class="form-label" for="email_register">{{__('db.label.email')}}<sup
                        class="required">*</sup></label>
                <input type="email" id="email_register" name="email" class="text" aria-label="{{__('db.label.email')}}"
                    required>
                <small class="form-helperText form-helperText--error" data-error="" data-success=""></small>
            </div>
            <div class="form-field">
                <label class="form-label" for="password_register">{{__('db.label.password')}}<sup
                        class="required">*</sup></label>
                <input type="password" id="password_register" name="password" class="text" required>
                <small class="form-helperText form-helperText--error" data-error="" data-success=""></small>
            </div>
            <div class="form-field">
                <label class="form-label" for="password_confirmation_register">{{__('db.label.confirm_password')}}<sup
                        class="required">*</sup></label>
                <input type="password" id="password_confirmation_register" name="password_confirmation" class="text"
                    required>
                <small class="form-helperText form-helperText--error" data-error="" data-success=""></small>
            </div>
            <div class="form-field input-hidden">
                <input type="hidden" class="google_recaptcha_token" name="google_recaptcha_token" />
                <small class="form-helperText form-helperText--error" data-error="Google Captcha"
                    data-success=""></small>
            </div>
            <div class="form-submission-error">
                <span></span>
            </div>
            <div class="form-extraInfo">
                <div class="gdpr-tickbox--holder">
                    <div class="form-field">
                        <label class="form-labelCheckbox">
                            <input class="form-checkbox" type="checkbox" id="agreement-tickbox"
                                name="agreement_tickbox"><span class="form-labelContent">Click here if you
                                agree to be contacted by The Travel Weekly Team to keep you informed of
                                latest news by email.</span>
                        </label>
                    </div>
                    <div class="form-field">
                        <label class="form-labelCheckbox">
                            <input class="form-checkbox" type="checkbox" id="gdpr-tickbox" name="gdpr-tickbox">
                            <span class="form-labelContent">Click here if you agree to The Travel Weekly's
                                <a href="/static/terms-and-conditions" target="_blank">Terms
                                    &amp;
                                    Conditions</a> and <a href="/static/privacy-policy" target="_blank">Privacy
                                    Policy</a>.
                            </span>
                        </label>
                        <small class="form-helperText form-helperText--error" data-error=""
                            data-error-value="You must agree with our <a href='/static/terms-and-conditions'>Terms and Conditions</a>"
                            data-success=""></small>
                    </div>
                    <button type="submit" class="btn btn--submit js-submit-register"
                        data-gtag-action="pressed_register_button" data-gtag-category="register_popup"
                        data-gtag-label="User attempts to register" aria-label="{{__('db.buttons.register')}}">
                        {{__('db.buttons.register')}}
                    </button>
                </div>
            </div>
        </form>
    </div>
    <footer class="modal-footer">
        <p> Already have an Account? <button onclick="Popup.login()" class="js-trigger-gtag btn"
                data-gtag-action="pressed_login_link" data-gtag-category="registration_popup"
                data-gtag-label="Pressed login link on the Registration Popup">Log In</button></p>
    </footer>
</div>
