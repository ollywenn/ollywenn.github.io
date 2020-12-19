@extends('layouts.template')
@section('body-class', 'page--webcasts-single page--casts-single')

@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-article.css').'?t='.$_SERVER['deployment_date']}}">
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-casts-single.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', $cast->title)

@section('content')

<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        {{-- FIXME: render the name of the main category --}}
                        <a href="/webcasts" class="btn btn--back">Webcasts</a>
                        {{-- FIXME: 👆🏻 --}}
                        <h1 class="article-title">{{ $cast->title }}</h1>
                        {{-- FIXME: render if flag present (should be probably on all list templates --}}
                        <a href="#" class="btn--partnerContent">Partner Content</a>
                        <div class="article-metadata">
                            <div class="article-byline">
                                <time class="article-date"
                                    datetime="{{date('Y-m-d',strtotime($cast->publishedDate))}}"
                                    title="{{date('d F Y',strtotime($cast->publishedDate))}}">{{date('d F Y, H:i',strtotime($cast->publishedDate))}}</time>
                            </div>
                            <div class="article-share">
                                @include('components.sharing_widget',[
                                'text' => '{{ $cast->title }}',
                                'title' => '{!! $cast->shortDescription !!}',
                                ])
                            </div>
                        </div>
                    </header>
                    <div class="article-body">
                        {!! $cast->shortDescription !!}
                        <div class="article-bodyMedia">
                            {!! $cast->mediaEmbedCode !!}
                        </div>
                    </div>
                </article>

                <section class="section section--relatedArticles">
                    <header class="section-header">
                        <h4 class="section-title">More Webcasts</h4>
                    </header>
                    <div class="articleSnippet-list">
                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="#" class="articleSnippet-thumb">
                                <img alt="{{-- TODO: --}}"
                                src="https://media.graphcms.com/cfBmnKCR0aOc4EziCvQA"></a>
                            <div class="articleSnippet-content">
                                <h4 class="articleSnippet-title"><a
                                        href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a>
                                </h4>
                                <ul class="article-mediaList">
                                    <li class="article-videoLength">2:50</li>
                                </ul>
                            </div>
                        </article>
                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="#" class="articleSnippet-thumb">
                                <img alt="{{-- TODO: --}}"
                                src="https://media.graphcms.com/cfBmnKCR0aOc4EziCvQA"></a>
                            <div class="articleSnippet-content">
                                <h4 class="articleSnippet-title"><a
                                        href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a>
                                </h4>
                                <ul class="article-mediaList">
                                    <li class="article-videoLength">2:50</li>
                                </ul>
                            </div>
                        </article>
                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="#" class="articleSnippet-thumb">
                                <img alt="{{-- TODO: --}}"
                                src="https://media.graphcms.com/cfBmnKCR0aOc4EziCvQA"></a>
                            <div class="articleSnippet-content">
                                <h4 class="articleSnippet-title"><a
                                        href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a>
                                </h4>
                                <ul class="article-mediaList">
                                    <li class="article-videoLength">2:50</li>
                                </ul>
                            </div>
                        </article>
                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="#" class="articleSnippet-thumb">
                                <img alt="{{-- TODO: --}}"
                                src="https://media.graphcms.com/cfBmnKCR0aOc4EziCvQA"></a>
                            <div class="articleSnippet-content">
                                <h4 class="articleSnippet-title"><a
                                        href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a>
                                </h4>
                                <ul class="article-mediaList">
                                    <li class="article-videoLength">2:50</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
            <aside class="sidebar">
                @include('components.sidebar_ad')
                @include('components.most_popular')
            </aside>
        </div>
    </div>
</main>
@endsection
