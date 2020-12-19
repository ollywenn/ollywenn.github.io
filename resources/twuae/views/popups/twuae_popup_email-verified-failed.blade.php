<div class="modal-container modal-container--emailVerifiedFailed" role="dialog" aria-modal="true"
    aria-labelledby="popup-email-verified-failed-title">
    <header class="modal-header">
        <h2 class="modal-title" id="popup-email-verified-failed-title">{{__('db.modal.email-verified-failed.title')}}
        </h2>
        <button class="btn btn--modalClose" aria-label="Close modal" onclick="Popup.hide()"></button>
    </header>
    <div class="modal-content" id="popup-email-verified-failed-content">
        <p>{{__('db.modal.email-verified-failed.text')}}</p>

        <button type="button" class="btn btn--submit" onclick="Popup.replace({path: '/popup-render/login'})"
            data-gtag-action="pressed_login_link" data-gtag-category="registration_popup"
            data-gtag-label="Pressed login link on the email verified popup">
            {{__('db.buttons.login')}}
        </button>

        <button onclick="Popup.hide();" class="js-trigger-gtag pointer btn btn--dismiss"
            data-gtag-action="email_verification_failed" data-gtag-category="email_verification_failed_popup"
            data-gtag-label="Pressed close Email Verification Failed Popup">
            {{__('db.modal.dismiss.button')}}
        </button>
    </div>
</div>
