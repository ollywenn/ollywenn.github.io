@extends('layouts.template')
@section('body-class', 'page--category')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-category.css').'?t='.$_SERVER['deployment_date']}}">
@endpush


@section('schema')
@include('schemas.category',[
'latest_articles'=>$category->getLatestArticles(5)
])
@include('schemas.breadcrumb',['breadcrumb' => $category->breadcrumb])
@endsection

@section('title', $category->label)

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        {{-- FIXME: render .btn element only on subcategories --}}
                        <a href="#" class="btn btn--back">Parent category title</a>
                        {{-- FIXME: 👆🏻 --}}
                        <h1 class="article-title article-title--list">{{$category->label}}</h1>
                    </header>
                    <div class="article-body">
                        @foreach($category->getLatestArticles(6) as $index => $item)
                            <article class="articleSnippet-item @if($index === 0){{'articleSnippet-item--fullImg'}}@endif " itemscope itemtype="http://schema.org/BlogPosting">
                                <a href="{{url($item->slug)}}" class="articleSnippet-thumb">
                                    <img alt="{{$item->headline}}"
                                        src="{!! \App\Helpers\CDNHelper::show($item->imageHandle,'750x384')!!}">
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title"><a
                                            href="{{url($item->slug)}}">{{$item->headline}}</a>
                                    </h3>
                                    <div class="article-metadata">
                                        <div class="article-published">
                                            {{date('M jS Y, H:i',strtotime($item->goLiveDate))}}</div>
                                    </div>
                                </div>
                            </article>
                        @endforeach
                        </div>
                        {{-- FIXME: render only between 667px and 1023px--}}
                        @if(!$isDesktop)
                            <div class="main-segment">
                                <div class="section section--ad">
                                    <div class="wrapper">
                                        @include('components.sidebar_ad')
                                    </div>
                                </div>
                            </div>
                        @endif
                    </article>
                </div>
                <div class="main-content">
                    <article class="article">
                        <div class="article-body js-loadmore-target">
                        @foreach($category->listArticlesSkip(6) as $index => $item)
                            {{-- FIXME: this loop should have even items (not odd). Same for extra loaded items --}}
                            <article class="articleSnippet-item js-article-template" itemscope
                                itemtype="http://schema.org/BlogPosting">
                                <a href="{{url($item->slug)}}" class="articleSnippet-thumb">
                                    <img alt="{{$item->headline}}"
                                        src="{!! \App\Helpers\CDNHelper::show($item->imageHandle,'600x315')!!}">
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title"><a
                                            href="{{url($item->slug)}}">{{$item->headline}}</a>
                                    </h3>
                                    @if(!$isMobile && !$isTablet)
                                        <div class="article-metadata">
                                            <div class="article-published">
                                                {{date('M jS Y, H:i',strtotime($item->goLiveDate))}}</div>
                                        </div>
                                    @endif
                                </div>
                            </article>
                        @endforeach
                    </div>
                    <button class="btn--loadMore js-btn-load-more"
                        data-page="{{request()->has('page') ? request()->page : 2}}"
                        data-limit="{{$totalPages}}">{{__('db.buttons.load-more')}}</button>
                    @push('scripts')
                    <script src="{{ProjectHelper::asset('/js/loadmore.js'.'?t='.$_SERVER['deployment_date'])}}">
                    </script>
                    @endpush
                </article>
            </div>
            {{-- FIXME: render up to 667px or 1024px up--}}
            @if(true)
                <aside class="sidebar">
                    @include('components.sidebar_ad')
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
