@include('components.queens_award_expanded')
<footer class="mainFooter">
    <section class="mainFooter-travelweekly">
        <div class="wrapper">
            <div class="mainFooter-section mainFooter-section--1">
                <section class="mainFooter-travelweeklyDetails">
                    <a href="/" class="logo logo--travelweekly-footer">{{__('db.blocks.footer.logo')}}</a>
                </section>
                <section class="mainFooter-socialMedia">
                    <h6 class="socialMedia-title">Follow Us</h6>
                    <nav class="socialMedia">
                        <ul>
                            <li><a class="socialMedia-link socialMedia-link--fb"
                                    href="{{config('app.config.social.facebook')}}" target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="{{__('db.blocks.social.open-tw-facebook')}}">facebook</a></li>
                            <li><a class="socialMedia-link socialMedia-link--tt"
                                    href="{{config('app.config.social.twitter')}}" target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="{{__('db.blocks.social.open-tw-twitter')}}">twitter</a></li>
                            <li><a class="socialMedia-link socialMedia-link--ln"
                                    href="{{config('app.config.social.linkedin')}}" target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="{{__('db.blocks.social.open-tw-linkedin')}}">linkedIn</a></li>
                            <li><a class="socialMedia-link socialMedia-link--in"
                                    href="{{config('app.config.social.instagram')}}" target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="{{__('db.blocks.social.open-tw-instagram')}}">instagram</a></li>
                            <li><a class="socialMedia-link socialMedia-link--yt"
                                    href="{{config('app.config.social.youtube')}}" target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="{{__('db.blocks.social.open-tw-youtube')}}">youtube</a></li>
                            <li><a class="socialMedia-link socialMedia-link--email"
                                    href="{{config('app.config.social.email')}}" target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="{{__('db.blocks.social.open-tw-email')}}">{{__('db.blocks.social.open-tw-email')}}</a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>
            <div class="mainFooter-section mainFooter-section--2">
                <section class="mainFooter-menus">
                    <div class="mainFooter-menusCol mainFooter-menusCol--1">
                        <nav class="mainFooter-nav">
                            <ul>
                                @if(isset($footerMenu))
                                @foreach($footerMenu['top'] as $link)
                                <li><a href="{{$link->buttonAction}}">{{$link->buttonText}}</a></li>
                                @endforeach
                                @endif
                            </ul>
                        </nav>
                    </div>
                    <div class="mainFooter-menusCol mainFooter-menusCol--2">
                        <nav class="mainFooter-nav">
                            <h6 class="mainFooter-title">Company</h6>
                            <ul>
                                @if(isset($footerMenu))
                                @foreach($footerMenu['company'] as $link)
                                <li><a href="{{$link->buttonAction}}">{{$link->buttonText}}</a></li>
                                @endforeach
                                @endif
                            </ul>
                        </nav>
                        <nav class="mainFooter-nav mainFooter-nav--legal">
                            <h6 class="mainFooter-title">Legal</h6>
                            <ul>
                                @if(isset($footerMenu))
                                @foreach($footerMenu['legal'] as $link)
                                <li><a href="{{$link->buttonAction}}">{{$link->buttonText}}</a></li>
                                @endforeach
                                @endif
                            </ul>
                        </nav>
                    </div>
                </section>
            </div>
        </div>
    </section>
    <section class="mainFooter-jacobs">
        <div class="wrapper">
            <div class="jacobs-content">
                <a href="https://jacobsmediagroup.com/" class="logo logo--jacobs" target="_blank"
                    rel="noopener noreferrer">Jacobs</a>
                <div class="mainFooter-copyright">
                    @if(isset($jmgFooter))
                    <p>{!! $jmgFooter->copyright !!}</p>
                    @endif
                </div>
            </div>
            <div class="mainFooter-logos">
                @if(isset($jmgFooter))
                @foreach($jmgFooter->jmgFooterLinks as $index => $link)
                @if(ArrayHelper::checkIfIs($link['logo'],'url','object'))
                <a href="{{$link['link']}}" target="_blank" class="logo logo--{{$link['key']}}"
                    style="width: {{$link['width']}}; flex-basis: {{$link['width']}}; max-width: {{$link['width']}}; height: {{$link['height']}}; background-size: {{$link['backgroundSize']}}; background-image: url('{{CDNHelper::show($link['logo']->url, '0x0',['fit'=>'max','format' => null])}}')"
                    rel="noopener noreferrer">{{$link['key']}}</a>
                @endif
                @endforeach
                @endif
            </div>
        </div>
    </section>
</footer>
@if(!isset($_COOKIE['twuae-JMG-EUConsent']))
<section class="section section--cookies">
    <div class="wrapper">
        <h3 class="cookies-title">{{__('db.blocks.cookies.title')}}</h3>
        <p>{{__('db.blocks.cookies.text')}} <a
                href="@if(\Illuminate\Support\Facades\Route::has('static_page')){{route('static_page',['slug' => 'cookiepolicy'])}}@endif">{{__('db.buttons.learn-more')}}</a>
        </p>
        <button class="btn--accept"
            data-url="@if(\Illuminate\Support\Facades\Route::has('accept-cookies')){{route('accept-cookies')}}@endif">{{__('db.buttons.accept_close')}}</button>
    </div>
</section>

@push('scripts')
<script src="{{ProjectHelper::asset('js/cookie.js'.'?t='.$_SERVER['deployment_date'])}}"></script>
@endpush
@endif
