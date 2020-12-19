@extends('layouts.template')
@section('body-class', 'page--reports-list')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-reports.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.page-title.reports'))

@section('content')

<main>
    <div class="main-segment">
        <div class="wrapper">
                <div class="main-content">
                    <article class="article">
                        <header class="article-header">
                            <h1 class="article-title">{{__('db.page-title.reports')}}</h1>
                        </header>
                        <div class="article-body js-loadmore-target">
                            @if(is_iterable($reports))
                                @foreach($reports as $index => $item)
                                <article class="articleSnippet-item js-article-template" itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="{{route('report-single',['slug' => $item->slug])}}" class="articleSnippet-thumb">
                                        <img alt="{{$item->headline}}"
                                            src="{!! \App\Helpers\CDNHelper::show($item->thumbnail(),'600x315')!!}">
                                    </a>
                                    <div class="articleSnippet-content">
                                        <h3 class="articleSnippet-title"><a
                                                href="{{route('report-single',['slug' => $item->slug])}}">{{$item->title}}</a>
                                        </h3>
                                    </div>
                                </article>
                            @endforeach
                            {{-- FIXME: remove these hardcoded article items 👇🏻 --}}
                            <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                                <a href="https://local.travelweekly.ae/sample-report" class="articleSnippet-thumb">
                                    <img alt="" src="https://media.graphcms.com/resize=w:600,h:315,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/OphO8nsgQCq9NxHrJDBL">
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title"><a href="https://local.travelweekly.ae/sample-report">Lorem ipsum dolor sit amet </a>
                                    </h3>
                                </div>
                            </article>
                            <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                                <a href="https://local.travelweekly.ae/sample-report" class="articleSnippet-thumb">
                                    <img alt="" src="https://media.graphcms.com/resize=w:600,h:315,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/OphO8nsgQCq9NxHrJDBL">
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title"><a href="https://local.travelweekly.ae/sample-report">Lorem ipsum dolor sit amet </a>
                                    </h3>
                                </div>
                            </article>
                            <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                                <a href="https://local.travelweekly.ae/sample-report" class="articleSnippet-thumb">
                                    <img alt="" src="https://media.graphcms.com/resize=w:600,h:315,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/OphO8nsgQCq9NxHrJDBL">
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title"><a href="https://local.travelweekly.ae/sample-report">Lorem ipsum dolor sit amet </a>
                                    </h3>
                                </div>
                            </article>
                            <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                                <a href="https://local.travelweekly.ae/sample-report" class="articleSnippet-thumb">
                                    <img alt="" src="https://media.graphcms.com/resize=w:600,h:315,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/OphO8nsgQCq9NxHrJDBL">
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title"><a href="https://local.travelweekly.ae/sample-report">Lorem ipsum dolor sit amet </a>
                                    </h3>
                                </div>
                            </article>
                            <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                                <a href="https://local.travelweekly.ae/sample-report" class="articleSnippet-thumb">
                                    <img alt="" src="https://media.graphcms.com/resize=w:600,h:315,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/OphO8nsgQCq9NxHrJDBL">
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title"><a href="https://local.travelweekly.ae/sample-report">Lorem ipsum dolor sit amet </a>
                                    </h3>
                                </div>
                            </article>
                            <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                                <a href="https://local.travelweekly.ae/sample-report" class="articleSnippet-thumb">
                                    <img alt="" src="https://media.graphcms.com/resize=w:600,h:315,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/OphO8nsgQCq9NxHrJDBL">
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title"><a href="https://local.travelweekly.ae/sample-report">Lorem ipsum dolor sit amet </a>
                                    </h3>
                                </div>
                            </article>
                            {{-- FIXME: remove these hardcoded article items 👆🏻 --}}
                        @endif
                    </div>
                    <button class="btn--loadMore js-btn-load-more"
                        data-page="{{--FIXME: fix this--}}"
                        data-limit="{{--FIXME: fix this--}}">{{__('db.buttons.load-more')}}</button>
                    @push('scripts')
                    <script src="{{ProjectHelper::asset('/js/loadmore.js'.'?t='.$_SERVER['deployment_date'])}}"></script>
                    @endpush
                </article>
            </div>
            {{-- FIXME: render up to 667px or 1024px up--}}
            @if(true)
                <aside class="sidebar">
                    <div class="sidebarAd">
                        <a href="https://thecaterer.com" target="_blank" rel="noopener noreferrer"><img src="https://via.placeholder.com/300x250?text=MPU+300x250" alt="Your ad here"></a>
                    </div>
                    {{-- FIXME: re-enable this
                        @include('components.sidebar_ad')
                        --}}
                    @if($isDesktop)
                        @include('components.most_popular')
                    @endif
                    @include('components.latest_jobs')
                </aside>
            @endif
        </div>
    </div>
</main>
@endsection
