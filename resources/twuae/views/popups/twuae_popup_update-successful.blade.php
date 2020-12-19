<div class="modal-container modal-container--updateSuccessful" role="dialog" aria-modal="true"
    aria-labelledby="popup-update-successful-title">
    <header class="modal-header">
        <h2 class="modal-title" id="popup-update-successful-title">{{__('db.modal.update-successful.title')}}</h2>
        <button class="btn btn--modalClose" aria-label="Close modal" onclick="Popup.hide()"></button>
    </header>
    <div class="modal-content" id="popup-update-successful-content">
        <p>{{__('db.modal.update-successful.text')}}</p>

        <button onclick="Popup.hide();" class="js-trigger-gtag pointer btn btn--dismiss"
            data-gtag-action="pressed_close_update-successful" data-gtag-category="update-successful_popup"
            data-gtag-label="Pressed close Update Successful Popup">
            {{__('db.modal.dismiss.button')}}
        </button>
    </div>
</div>
