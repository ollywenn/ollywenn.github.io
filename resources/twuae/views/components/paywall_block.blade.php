<div class="locked-content"><span class="lock-icon"></span></div>
<div class="paywall">
    <div class="title">
        <h3>{{ $paywallContent->title }}</h3>
        <p>{{ $paywallContent->subtitle }}</p>
    </div>

    <div class="subscribe-button">
        {{-- By default we are trying to get a create account popup --}}
        @php($triggerAction = 'Popup.signUp()')
        @php($class = 'js-btn-signup btn--signup')
        {{-- This is different if the user needs to login (login only article) --}}
        @if($paywallContent->buttonAction==='#login-holder')
            @php($triggerAction = 'Popup.login()')
            @php($class = 'js-btn-login btn--login')
        @endif

        {{-- We try to get the user to sign up --}}
        @if($paywallContent->buttonAction==='#fast-signup')
            @php($triggerAction='Popup.fastSignUp()')
            {{-- But if the user is already logged in by login - only we can go for subscription modes --}}
            @if(Auth::check())
                @php($triggerAction='Popup.fastSubscribe()')
            @endif
        @endif

        {{-- The user is already premium, but not premium enough - but we cant do anythign about it --}}
        @if($paywallContent->buttonAction=='#contact-to-upgrade')
            @php($triggerAction='Popup.upgradeSubscription()')
        @endif

        <button onclick="{{$triggerAction}}"
           data-gtag-action="{{$paywallContent->buttonAction}}"
           class="button {{$class}}">
            {{$paywallContent->button ?? 'Submit'}}
        </button>
    </div>
</div>
