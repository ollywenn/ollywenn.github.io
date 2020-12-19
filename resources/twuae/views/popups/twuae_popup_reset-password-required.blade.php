<div class="modal-container modal-container--resetPassword" role="dialog" aria-modal="true"
    aria-labelledby="popup-title">
    <header class="modal-header">
        <h2 class="modal-title" id="popup-title">{{ __('db.reset-password-required.heading') }}</h2>
        <button class="btn btn--modalClose" aria-label="Close modal" onclick="Popup.hide()">Close</button>
    </header>
    <div class="modal-content" id="popup-reset-password-required-content">
        <form class="form" method="POST"
            action="@if (Route::has('reset-password-required')){{ route('reset-password-required') }}@endif"
            id="createPasswordForm" autocomplete="off">
            @csrf
            <div class="form-field">
                <label class="form-label" for="password_create">{{__('db.label.password')}}<sup
                        class="required">*</sup></label>
                <input type="password" id="password_create" name="password" class="text" required>
                <small class="form-helperText form-helperText--error" data-error="" data-success=""></small>
            </div>
            <div class="form-field">
                <label class="form-label" for="password_confirmation_create">{{__('db.label.confirm_password')}}<sup
                        class="required">*</sup></label>
                <input type="password" id="password_confirmation_create" name="password_confirmation" class="text"
                    required>
                <small class="form-helperText form-helperText--error" data-error="" data-success=""></small>
            </div>
            <div class="form-field input-hidden">
                <input type="hidden" class="google_recaptcha_token" name="google_recaptcha_token" />
                <small class="form-helperText form-helperText--error" data-error="Google Captcha"
                    data-success=""></small>
            </div>
            <button type="submit" class="btn btn--submit js-submit-reset-password-required"
                data-gtag-action="pressed_reset-password-required_button"
                data-gtag-category="reset-password-required_popup"
                data-gtag-label="User attempts to reset-password-required"
                aria-label="{{__('db.buttons.reset-password-required')}}">
                {{__('db.buttons.reset-password-required')}}
            </button>
        </form>
    </div>
</div>
