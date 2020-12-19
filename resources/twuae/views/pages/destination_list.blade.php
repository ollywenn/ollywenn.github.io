@extends('layouts.template')
@section('body-class', 'page--destinations-list')
@push('styles')
    <link rel="stylesheet"
          href="{{ProjectHelper::asset('css/page-destinations.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.page-title.destinations'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        <h1 class="article-title article-title--list">{{__('db.page-title.destinations')}}</h1>
                        <div class="article-quickFilterMenu">
                            <ul>
                                <li><a href="/destinations" class="btn is-active">Latest</a></li>
                                <li>
                                    <a href="#" class="btn btn--dropdown">Holiday Type</a>

                                </li>
                                <li><a href="#" class="btn btn--dropdown">Region</a></li>
                            </ul>
                        </div>
                        <a href="/destinations" class="section-extraNav btn btn--filter">Filter</a>
                    </header>
                    <div class="article-body">
                        @if(is_iterable($latest))
                        {{-- TODO: should should only 10 items according to the designs --}}
                            @foreach($latest as $index => $item)
                                <article class="articleSnippet-item @if($index == 0){{'articleSnippet-item--fullBg'}}@endif " itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="{{url($item->slug)}}" class="articleSnippet-thumb">
                                        @if(@index == 0)
                                            <img alt="{{$item->headline}}" src="{!! \App\Helpers\CDNHelper::show($item->thumbnail,'1250x657')!!}">
                                        @else
                                            <img alt="{{$item->headline}}" src="{!! \App\Helpers\CDNHelper::show($item->thumbnail,'750x384')!!}">
                                        @endif
                                    </a>
                                    <div class="articleSnippet-content">
                                        <h3 class="articleSnippet-title"><a
                                                href="{{url($item->slug)}}">{{$item->title}}</a>
                                        </h3>
                                        @if($index == 0)
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident laudantium quo deserunt eaque quisquam expedita</p>
                                            <div class="article-byline">
                                                <address class="article-author">By <a href="#" class="article-authorsPermalink">Laura French</a>
                                                </address>
                                            </div>
                                        @endif
                                    </div>
                                </article>
                            @endforeach
                        @endif
                    </div>
                    <button class="btn--loadMore js-btn-load-more" data-page="{{--FIXME: hook up BE --}}" data-limit="{{--FIXME: hook up BE --}}">{{__('db.buttons.load-more')}}</button>
                    @push('scripts')
                        <script src="{{ProjectHelper::asset('/js/loadmore.js'.'?t='.$_SERVER['deployment_date'])}}">
                        </script>
                    @endpush
                </article>
                <section class="section section--relatedArticles section--relatedArticles-spotlight">
                    <header class="section-header">
                        <h4 class="section-title">Spotlight</h4>
                        <h5 class="section-subtitle">Festivals Around the World</h4>
                    </header>
                    <div class="articleSnippet-list">
                        {{-- TODO: display only 3 articles --}}
                        <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting"><a href="https://local.travelweekly.ae/news/air/ba-and-iberia-start-delayed-codeshare" class="articleSnippet-thumb"><img alt="BA and Iberia start delayed codeshare" src="https://media.graphcms.com/cfBmnKCR0aOc4EziCvQA"></a><div class="articleSnippet-content"><h4 class="articleSnippet-title"><a href="https://local.travelweekly.ae/news/air/ba-and-iberia-start-delayed-codeshare">BA and Iberia start delayed codeshare</a></h4></div></article>

                        <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting"><a href="https://local.travelweekly.ae/news/air/if-you-fancy-an-island-break-greece-is-the-word" class="articleSnippet-thumb"><img alt="If you fancy an island break, Greece is the word" src="https://media.graphcms.com/cfBmnKCR0aOc4EziCvQA"></a><div class="articleSnippet-content"><h4 class="articleSnippet-title"><a href="https://local.travelweekly.ae/news/air/if-you-fancy-an-island-break-greece-is-the-word">If you fancy an island break, Greece is the word</a></h4></div></article>

                        <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting"><a href="https://local.travelweekly.ae/news/air/greek-alternatives-set-to-take-the-spotlight" class="articleSnippet-thumb"><img alt="Greek alternatives set to take the spotlight" src="https://media.graphcms.com/cfBmnKCR0aOc4EziCvQA"></a><div class="articleSnippet-content"><h4 class="articleSnippet-title"><a href="https://local.travelweekly.ae/news/air/greek-alternatives-set-to-take-the-spotlight">Greek alternatives set to take the spotlight</a></h4></div></article>
                    </div>
                </section>
                <aside class="sidebar">
                    <div class="sidebarAd">
                        <a href="https://thecaterer.com" target="_blank" rel="noopener noreferrer"><img src="https://via.placeholder.com/300x250?text=MPU+300x250" alt="Your ad here"></a>
                    </div>
                    {{-- FIXME: re-enable this
                        @include('components.sidebar_ad')
                        --}}
                </aside>
            </div>
        </div>
    </div>
</main>
@endsection
