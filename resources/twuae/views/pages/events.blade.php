@extends('layouts.template')
@section('body-class', 'page--events-list')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-events.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.pages.events.title'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        <h1 class="article-title article-title--list">{{__('db.pages.events.title')}}</h1>
                    </header>
                    <div class="article-body">
                        @foreach($events as $index => $item)
                            @if($index < 5)
                                <article class="articleSnippet-item @if($index === 0){{'articleSnippet-item--fullImg'}}@endif " itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="{{url($item->slug)}}" class="articleSnippet-thumb">
                                        <img alt="{{$item->title}}"
                                            src="{!! \App\Helpers\CDNHelper::show($item->thumbnail(),'750x384')!!}">
                                    </a>
                                    <div class="articleSnippet-content">
                                        <h3 class="articleSnippet-title"><a
                                                href="{{url($item->slug)}}">{{$item->title}}</a>
                                        </h3>
                                    </div>
                                </article>
                            @endif
                        @endforeach
                    </div>
                    <section class="section section--cta">
                        <header class="section-header">
                            <h3 class="section-title">Tell us about your next event</h3>
                        </header>
                        <a href="{{route('create-event')}}" class="btn btn--primary">
                            {{__('db.pages.events.create_event')}}
                        </a>
                    </section>
                    <section class="section section--relatedArticles js-related-articles">
                        <header class="section-header">
                            <h4 class="section-title">More Events</h4>
                            <button class="btn btn--calendar js-btn-toggle-events is-active" data-target="articleSnippet-list--calendar">Events list</button>
                            <button class="btn btn--list js-btn-toggle-events" data-target="articleSnippet-list--events">Events Calendar</button>
                        </header>
                        <div class="articleSnippet-list articleSnippet-list--events js-related-events-view is-active">
                            @foreach($events as $index => $item)
                                @if($index > 4)
                                    <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                                        <a href="{{url($item->slug)}}" class="articleSnippet-thumb">
                                            <img alt="{{$item->title}}"
                                            src="{!! \App\Helpers\CDNHelper::show($item->thumbnail(),'600x315')!!}"></a>
                                        <div class="articleSnippet-content">
                                            <h4 class="articleSnippet-title"><a
                                                    href="{{url($item->slug)}}">{{$item->title}}</a>
                                            </h4>
                                        </div>
                                    </article>
                                @endif
                        @endforeach
                        </div>
                        <div class="articleSnippet-list articleSnippet-list--calendar js-related-events-view">
                            Calendar here
                            {{-- TODO: include calendar js lib --}}
                        </div>
                    </section>
                </article>
            </div>
            <aside class="sidebar">
                @include('components.sidebar_ad')
                @include('components.most_popular')
                @include('components.latest_jobs')
            </aside>

        </div>
    </div>
</main>
@endsection
@push('scripts')
<script src="{{ProjectHelper::asset('js/events.js'.'?t='.$_SERVER['deployment_date'])}}"></script>
@endpush
