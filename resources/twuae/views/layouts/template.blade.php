<!doctype html>
<html class="no-js" lang="{{\App::getLocale()}}" @if(isset($rtlText) && $rtlText === true) dir="rtl" @endif>

<head>
    <meta charset="utf-8">
    <title>@if(!empty($__env->yieldContent('title')))@yield('title'){{' | '}}@endif{{config('app.config.site.title')}}
    </title>
@if(empty($__env->yieldContent('schema')))
        @include('schemas.website')
    @else
        @yield('schema')
    @endif
    <meta name="title" content="@yield('metaTitle', \App\Helpers\MetaHelper::title(__('db.site.meta_title')))">
    <meta name="description"
          content="@yield('metaDescription', \App\Helpers\MetaHelper::description(__('db.site.meta_description')))">

    <meta name="keywords" content="@yield('metaKeywords', __('db.site.keywords'))">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Cache-control" content="public">
    <link rel="dns-prefetch" href="https://media.graphcms.com/">
    <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin>
    <link rel="preconnect" href="https://media.graphcms.com/" crossorigin>
@if (app()->environment() === 'production')
        <link rel="preconnect" href="https://securepubads.g.doubleclick.net" crossorigin>
    @endif
    <meta property="og:site_name" content="{{__('db.site.title')}}">
    <meta name="theme-color" content="#fdb913">
    <link rel="apple-touch-icon" sizes="57x57" href="{{ProjectHelper::asset('img/favicon/apple-touch-icon-57x57.png').'?t='.$_SERVER['deployment_date']}}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ProjectHelper::asset('img/favicon/apple-touch-icon-60x60.png').'?t='.$_SERVER['deployment_date']}}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ProjectHelper::asset('img/favicon/apple-touch-icon-72x72.png').'?t='.$_SERVER['deployment_date']}}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ProjectHelper::asset('img/favicon/apple-touch-icon-76x76.png').'?t='.$_SERVER['deployment_date']}}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ProjectHelper::asset('img/favicon/apple-touch-icon-114x114.png').'?t='.$_SERVER['deployment_date']}}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ProjectHelper::asset('img/favicon/apple-touch-icon-120x120.png').'?t='.$_SERVER['deployment_date']}}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ProjectHelper::asset('img/favicon/apple-touch-icon-144x144.png').'?t='.$_SERVER['deployment_date']}}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ProjectHelper::asset('img/favicon/apple-touch-icon-152x152.png').'?t='.$_SERVER['deployment_date']}}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ProjectHelper::asset('img/favicon/apple-touch-icon-180x180.png').'?t='.$_SERVER['deployment_date']}}">
    <link rel="icon" type="image/png" href="{{ProjectHelper::asset('img/favicon/favicon-32x32.png').'?t='.$_SERVER['deployment_date']}}" sizes="32x32">
    <link rel="icon" type="image/png" href="{{ProjectHelper::asset('img/favicon/favicon-194x194.png').'?t='.$_SERVER['deployment_date']}}" sizes="194x194">
    <link rel="icon" type="image/png" href="{{ProjectHelper::asset('img/favicon/favicon-96x96.png').'?t='.$_SERVER['deployment_date']}}" sizes="96x96">
    <link rel="icon" type="image/png" href="{{ProjectHelper::asset('img/favicon/android-chrome-192x192.png').'?t='.$_SERVER['deployment_date']}}" sizes="192x192">
    <link rel="icon" type="image/png" href="{{ProjectHelper::asset('img/favicon/favicon-16x16.png').'?t='.$_SERVER['deployment_date']}}" sizes="16x16">
    <link rel="manifest" href="{{ProjectHelper::asset('img/favicon/manifest.json').'?t='.$_SERVER['deployment_date']}}">
    <link rel="mask-icon" href="{{ProjectHelper::asset('img/favicon/safari-pinned-tab.svg').'?t='.$_SERVER['deployment_date']}}" color="#d9434e">
    <link rel="shortcut icon" href="{{ProjectHelper::asset('img/favicon/favicon.ico').'?t='.$_SERVER['deployment_date']}}">
    <meta name="msapplication-TileImage" content="{{ProjectHelper::asset('/img/favicon/mstile-144x144.png').'?t='.$_SERVER['deployment_date']}}">
    <meta name="msapplication-config" content="{{ProjectHelper::asset('/img/favicon/browserconfig.xml').'?t='.$_SERVER['deployment_date']}}">
    <meta name="msapplication-TileColor" content="#702e8f">
    <meta name="apple-mobile-web-app-title" content="Travel Weekly">
    <meta name="application-name" content="Travel Weekly">

    <meta http-equiv="Cache-Control" content="max-age=290304000, public">

    <meta property="og:title" content="@yield('metaTitle', __('db.site.meta_title'))">
    <meta property="og:description" content="@yield('metaDescription', __('db.site.meta_description'))">
    <meta property="og:site_name" content="{{__('db.site.title')}}">
    <meta property="og:image" content="@yield('metaImage', CDNHelper::show(config('app.config.meta_image'),'200x200'))">
    <meta property="og:image:width" content="@yield('metaImageWidth', '200')">
    <meta property="og:image:height" content="@yield('metaImageHeight', '200')">
    <meta property="og:url" content="@yield('ogurl', url()->current())">
    <meta property="og:type" content="@yield('metaPageType', 'website')">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="@yield('twitter:title' )">
    <meta name="twitter:description" content="@yield('twitter:description', __('db.site.meta_description'))">
    <meta name="twitter:image"
          content="@yield('twitter:image', CDNHelper::show($base_image_url ?? config('app.config.meta_image'),'600x335'))">
@if(!is_null(config('app.config.twitter-handle', null)))
        <meta name="twitter:site" content="{{'@'.ltrim(config('app.config.twitter-handle'),'@')}}" />
    @endif
@if(!is_null(config('app.config.twitter-creator', null)))
        <meta name="twitter:creator" content="{{'@'.ltrim(config('app.config.twitter-creator'),'@')}}" />
    @endif
    <meta property="og:locale" content="en_GB">
    <meta property="og:locale:alternate" content="en_US">

    @yield('meta')

    <link rel="stylesheet" href="https://use.typekit.net/mzp3izq.css">
    {{-- TODO: investigate a way to divide critical and main that works on firefox and ie --}}
    <link rel="preload" as="style" href="{{ProjectHelper::asset('css/critical.css').'?t='.$_SERVER['deployment_date']}}">
    <link rel="stylesheet" href="{{ProjectHelper::asset('css/critical.css').'?t='.$_SERVER['deployment_date']}}">

    @stack('styles')

    @yield('scoped-styles')
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script>
            window.googletag = window.googletag || {cmd: []};
    </script>
@if(!empty(config('app.config.google.tracking.id')))
    <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id={{config('app.config.google.tracking.id')}}">
    </script>

        <script>
            window.dataLayer = window.dataLayer || [];

        function gtag() {
                dataLayer.push(arguments);
            }

        gtag("js", new Date());
        gtag("config", '{{config('app.config.google.tracking.id')}}');
    </script>

    @endif
</head>

{{-- FIXME: the whole concept of ad--takeover has been integrated fully so, the class itself is useless --}}
@php($bodyClassTakeover = (isset($adBlocks) && array_has($adBlocks, ['skyscrapperLeft','skyscrapperRight']) && !empty($adBlocks['skyscrapperLeft'])) ? 'ad--takeover': '')
<body class="@yield('body-class') {{ $bodyClassTakeover}}">
    <!--[if IE]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade
        your browser</a> to improve your experience and security.</p>
    <![endif]-->
    @if(true) {{-- FIXME: these ads should show from 1366 onwards --}}
        @if(isset($adBlocks) && array_key_exists('skyscrapperLeft', $adBlocks))
            <div class="bgAd bgAd--1">
                {!! $adBlocks['skyscrapperLeft'] !!}
            </div>
        @endif
        @if(isset($adBlocks) && array_key_exists('skyscrapperRight', $adBlocks))
            <div class="bgAd bgAd--2">
                {!! $adBlocks['skyscrapperRight'] !!}
            </div>
        @endif
    @endif
    {{-- FIXME: this should show only if there is an ad to be shown, no matter which device/size --}}
    @if(true)
        <div class="section section--topAd">
            @if(isset($adBlocks) && array_key_exists('leaderboard', $adBlocks))
            <div class="topAd">
                {!! $adBlocks['leaderboard'] !!}
            </div>
            @endif
        </div>
    @endif
    @if(isset($breakingNews) && $breakingNews !== null)
    @include('components.breaking_news')
    @endif
    @include('layouts.header')

    @yield('content')

    @include('layouts.footer')

    <!--modal wrapper-->
    <div class="modal micromodal-slide" id="global-popup" aria-hidden="true">
        <div class="modal-overlay" tabindex="-1" onclick="Popup.hide()"></div>
    </div>

    <div class="search--container js-search-container">
        <div class="wrapper">
            <button class="btn btn--close js-close-search">Close</button>
            <div class="search--input-container">
                <input id="top-search" class="search-input js-search-input" type="search" required
                    placeholder="Type here to search">
                <button type="btn" class="btn--search js-btn-search" for="search" aria-label="Search">
                    Search
                </button>
            </div>
            <div class="articles-result-box">
                <div class="gcse-searchresults-only"></div>
            </div>
            <div class="categories-and-tags-result-box">
                <div class="js-quick-search-target qs-content"></div>
            </div>
        </div>
    </div>

    @prepend('scripts')
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script>
        window.jQuery || document.write('<script src="/core/js/external/jquery-3.4.1.min.js"><\/script>')
    </script>
    <!--
        <script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    -->
    <script src="{{ProjectHelper::asset('js/main.js'.'?t='.$_SERVER['deployment_date'])}}"></script>
    <script src="{{ProjectHelper::asset('js/user.js'.'?t='.$_SERVER['deployment_date'])}}"></script>
    <script src="https://www.google-analytics.com/analytics.js" async></script>
    @endprepend

    @stack('scripts')

    @if(!empty(config('app.config.google.tracking.id')))
    <script>
        window.ga = function () {
            ga.q.push(arguments)
        };
        ga.q = [];
        ga.l = +new Date;
        ga('create', '{{config('app.config.google.tracking.id')}}', 'auto');
        ga('set', 'transport', 'beacon');
        ga('send', 'pageview')
    </script>
    @endif
</body>

</html>
