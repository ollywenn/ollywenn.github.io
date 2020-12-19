<div class="modal-container modal-container--createPassword" role="dialog" aria-modal="true"
    aria-labelledby="popup-title">
    <header class="modal-header">
        <h2 class="modal-title" id="popup-title">{{ __('db.create-password.heading') }}</h2>
        <button class="btn btn--modalClose" aria-label="Close modal" onclick="Popup.hide()">Close</button>
    </header>
    <div class="modal-content" id="popup-create-password-content">
        <form class="form" method="POST"
            action="@if (Route::has('update-password')){{ route('update-password') }}@endif" id="createPasswordForm"
            autocomplete="off">
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
            <button type="submit" class="btn btn--submit js-submit-create-password"
                data-gtag-action="pressed_create-password_button" data-gtag-category="create-password_popup"
                data-gtag-label="User attempts to create-password" aria-label="{{__('db.buttons.create-password')}}">
                {{__('db.buttons.create-password')}}
            </button>
        </form>
    </div>
</div>
