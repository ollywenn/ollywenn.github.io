<div class="modal-container modal-container--emailSent" role="dialog" aria-modal="true"
    aria-labelledby="popup-verification-mail-sent-title">
    <header class="modal-header">
        <h2 class="modal-title" id="popup-verification-mail-sent-title">
            {{__('db.modal.verification-mail.success.title')}}</h2>
        <button class="btn btn--modalClose" aria-label="Close modal" onclick="Popup.hide()"></button>
    </header>
    <div class="modal-content" id="popup-verification-mail-sent-content">
        <p>{{__('db.modal.verification-mail.success.text')}}</p>

        <button onclick="Popup.hide();" class="js-trigger-gtag btn btn--acknowledge"
            data-gtag-action="pressed_close_verification_email_sent" data-gtag-category="verification_email_sent_popup"
            data-gtag-label="Pressed close Verification Email Sent Popup">
            {{__('db.modal.verification-mail.success.button')}}
        </button>
    </div>
</div>
