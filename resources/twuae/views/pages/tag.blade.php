@extends('layouts.template')
@section('body-class', 'page--tag')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-tag.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', $tag->label)

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">


                <h1 class="topHeadlines-title section-title">{{$tag->label}}
                </h1>

                @foreach($tag->articles() as $index => $article)
                <article itemscope itemtype="http://schema.org/BlogPosting">
                    <a href="{{url($article->slug)}}" class="articleSnippet-thumb">

                        <img alt="{{$article->headline}}"
                            src="{!! \App\Helpers\CDNHelper::show($article->imageHandle,'300x160')!!}">

                        <span class="articleSnippet-category">{{$article->categoryLabel}}</span>
                    </a>
                    <div class="articleSnippet-content">
                        <h3 class="articleSnippet-title"><a
                                href="{{url($article->slug)}}">{{$article->headline}}</a>
                        </h3>
                        <p>{{\Illuminate\Support\Str::limit($article->shortText, 100).' '}}</p>
                        <a href="{{url($article->slug)}}"
                            class="articleSnippet-readMore">{{__('db.articles.read-more')}}</a>
                    </div>
                </article>
                @endforeach
                @include('components.pagination', $pagination)

            </div>
            <aside class="sidebar">
                @include('components.sidebar_ad')
                @include('components.most_popular')
            </aside>
        </div>
    </div>
</main>
@endsection
