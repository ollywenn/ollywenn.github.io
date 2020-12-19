<div class="modal-container modal-container--forgotPassword" role="dialog" aria-modal="true"
    aria-labelledby="popup-title">
    <header class="modal-header">
        <h2 class="modal-title" id="popup-title">Forgot your password?</h2>
        <button class="btn btn--modalClose" aria-label="Close modal" onclick="Popup.hide()"></button>
    </header>
    <div class="modal-content" id="popup-sign-up-content">
        <form class="form" method="POST" action="@if (Route::has('password.email')){{ route('password.email') }}@endif"
            id="forgot-passwordForm" autocomplete="off">
            @csrf
            <div class="form-field">
                <label class="form-label" for="email_forgot-password">{{__('db.label.email')}}<sup
                        class="required">*</sup></label>
                <input type="email" id="email_forgot-password" name="email" class="text"
                    aria-label="{{__('db.label.email')}}" required>
                <small class="form-helperText form-helperText--error" data-error="" data-success=""></small>
            </div>
            <div class="form-field input-hidden">
                <input type="hidden" class="google_recaptcha_token" name="google_recaptcha_token" />
                <small class="form-helperText form-helperText--error" data-error="Google Captcha"
                    data-success=""></small>
            </div>
            <button type="submit" class="btn btn--submit js-submit-forgot-password"
                data-gtag-action="pressed_forgot-password_button" data-gtag-category="forgot-password_popup"
                data-gtag-label="User attempts to forgot-password" aria-label="{{__('db.buttons.forgot-password')}}">
                {{__('db.buttons.forgot-password')}}
            </button>
        </form>
    </div>
</div>
