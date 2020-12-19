@extends('layouts.template')
@section('body-class', 'page--subscribe')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-subscribe.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', $page->magazineTitle)

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        <h1 class="article-title">{{ $page->magazineTitle }}</h1>
                        <div class="article-hero">
                            <img src="{{\App\Helpers\CDNHelper::show($page->cover(),'325x433')}}" alt="{{-- TODO:--}}">
                        </div>
                    </header>
                    <div class="article-body">
                        {!! $page->magazineBlurb !!}
                        <div class="article-simpleSegment article-simpleSegment--ctas">
                            <a class="btn btn--primary" href="{{$page->magazineButtonLink}}" target="_blank"
                                rel="noopener noreferrer">{{$page->magazineButtonText}}</a>
                            <div class="article-simpleSegmentDivider">
                                <div class="article-simpleSegmentDividerContent">{{__('db.pages.subscribe.or')}}</div>
                            </div>
                            <a class="btn btn--secondary" href="{{$page->digitalEditionButtonLink}}" target="_blank"
                                rel="noopener noreferrer">{{$page->digitalEditionButtonText}}</a>
                        </div>

                        {!! $page->digitalEditionBlurb !!}

                        <section class="article-bodySection">
                            <header class="article-bodySectionHeader">
                                <h2 class="article-bodySectionTitle">{{ $page->subscribeNewsletterTitle }}</h2>
                            </header>
                            {!! $page->subscribeNewsletterBlurb !!}
                            <a class="btn btn--primary btn--block" href="{{$page->subscribeNewsletterButtonLink}}"
                                target="_blank" rel="noopener noreferrer">{{$page->subscribeNewsletterButtonText}}</a>
                        </section>

                        <section class="article-bodySection article-bodySection--highlight">
                            <header class="article-bodySectionHeader">
                                <h2 class="article-bodySectionTitle">{{ $page->rssFeedBlockTitle }}</h2>
                            </header>
                            <div class="article-simpleSegment">
                                <a class="btn btn--rss" href="{{$page->rssNewsFeedUrl}}" target="_blank"
                                    rel="noopener noreferrer">{{__('db.pages.subscribe.rss_feed')}}</a>
                                <a class="btn btn--rss" href="{{$page->rssJobsFeedUrl}}" target="_blank"
                                    rel="noopener noreferrer">{{__('db.pages.subscribe.jobs_feed')}}</a>
                                <a class="btn btn--rss" href="{{$page->rssDestinationsFeedUrl}}" target="_blank"
                                    rel="noopener noreferrer">{{__('db.pages.subscribe.destinations_feed')}}</a>
                            </div>
                            {!! $page->extraText !!}
                        </section>
                    </div>
                </article>
            </div>
        </div>
    </div>
</main>
@endsection
