@extends('layouts.template')
@section('body-class', 'page--hub-single')
@push('styles')
    <link rel="stylesheet" href="{{ProjectHelper::asset('css/page-static.css').'?t='.$_SERVER['deployment_date']}}">
    {{-- Available: banner, parallax_banner, title --}}
    <link rel="stylesheet" href="{{ProjectHelper::asset('css/page-hub-list-banner-layout-'.strtolower($page->bannerLayout).'.css').'?t='.$_SERVER['deployment_date']}}">
    @if(!empty($page->css))
        <style type="text/css">{!! $page->css !!}</style>
    @endif
@endpush

@section('title', $page->title)

@section('content')
    <main>
        <div class="main-segment">
            <div class="wrapper">
                <div class="main-content">
                    @include('components.hub_'.(strtolower($page->bannerLayout ?? 'banner')), ['hub' => $page])
                    <div class="main-content--body">
                    {!! \Illuminate\Mail\Markdown::parse($page->body) !!}
                    </div>
                </div>
                <aside class="sidebar">
                    @if(empty($page->hideSponsor) || $page->hideSponsor === 1)
                        <div>
                            <span>Sponsored by:</span>
                            <img src="{{CDNHelper::show($hub->sponsorLogoImage(), '240xa')}}">
                            <p>{{$hub->sponsorText}}</p>
                            <a href="{{$hub->sponsorUrl}}" target="_blank">{{$hub->sponsorButtonText}}</a>
                        </div>
                    @endif

                    @foreach($page->boxes as $boxSection)
                        <hr>
                        <div>
                            <h3>{{$boxSection->title}}</h3>
                            @foreach($boxSection->boxes as $box)
                                <div>
                                    <h4>{{$box->title}}</h4>
                                    {!! \Illuminate\Mail\Markdown::parse($box->body) !!}
                                </div>
                            @endforeach
                        </div>
                    @endforeach
                </aside>
            </div>
        </div>
    </main>
@endsection
