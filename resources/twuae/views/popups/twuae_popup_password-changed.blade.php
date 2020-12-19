<div class="modal-container modal-container--passwordChanged" role="dialog" aria-modal="true"
    aria-labelledby="popup-password-changed-title">
    <header class="modal-header">
        <h2 class="modal-title" id="popup-password-changed-title">
            {{__('db.modal.password-changed.success.title')}}</h2>
        <button class="btn btn--modalClose" aria-label="Close modal" onclick="Popup.hide()"></button>
    </header>
    <div class="modal-content" id="popup-password-changed-content">
        <p>{{__('db.modal.password-changed.success.text')}}</p>

        <button onclick="Popup.hide();" class="js-trigger-gtag pointer btn btn--acknowledge"
            data-gtag-action="pressed_close_password_changed" data-gtag-category="password_changed_popup"
            data-gtag-label="Pressed close Password Changed Popup">
            {{__('db.modal.password-changed.success.button')}}
        </button>
    </div>
</div>
