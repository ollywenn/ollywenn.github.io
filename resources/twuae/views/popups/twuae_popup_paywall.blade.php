<div class="modal-container modal-container--paywall" role="dialog" aria-modal="true"
    aria-labelledby="popup-paywall-title">
    <header class="modal-header">
        <h2 class="modal-title" id="popup-paywall-title">{{__('db.modal.paywall.title')}}</h2>
        <button class="btn btn--modalClose" aria-label="Close modal" onclick="Popup.hide()"></button>
    </header>
    <div class="modal-content" id="popup-paywall-content">
        <p>{{__('db.modal.paywall.text')}}</p>

        <button type="button" class="btn btn--submit" onclick="Popup.replace({path: '/popup-render/login'})"
            data-gtag-action="pressed_login_link" data-gtag-category="registration_popup"
            data-gtag-label="Pressed login link on the email verified popup">
            {{__('db.buttons.login')}}
        </button>

        <button type="button" class="btn btn--submit js-submit-register"
            onclick="Popup.replace({path: '/popup-render/sign-up'})" data-gtag-action="pressed_register_button"
            data-gtag-category="register_popup" data-gtag-label="User attempts to register"
            aria-label="{{__('db.buttons.register')}}">
            {{__('db.buttons.register')}}
        </button>

        <button onclick="Popup.hide();" class="js-trigger-gtag pointer btn btn--dismiss"
            data-gtag-action="pressed_close_paywall" data-gtag-category="paywall_popup"
            data-gtag-label="Pressed close Paywall Popup">
            {{__('db.modal.dismiss.button')}}
        </button>
    </div>
</div>
