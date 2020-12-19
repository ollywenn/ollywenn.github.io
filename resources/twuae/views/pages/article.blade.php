@extends('layouts.template')
@section('body-class', 'page--article-single')

@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-article.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('metaImage'){{$article->meta_image}}@endsection
@section('schema')
@include('schemas.article',[
'authorName'=>!empty($article->author_data) ? $article->author_data[0]->full_name:'',
'metaImage'=>$article->meta_image,
'metaDescription' => $article->meta_description,
'published' => date('Y-m-d',strtotime($article->publishedDate)),
'modified' => date('Y-m-d',strtotime($article->updated_at))
])
@include('schemas.breadcrumb',['breadcrumb' => $article->breadcrumb])
@endsection

@section('title', \Illuminate\Support\Str::limit($article->title, 44))

@section('content')

<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        {{-- FIXME: render the name of the main (sub)category --}}
                        <a href="#" class="btn btn--back">(Sub)Category title</a>
                        {{-- FIXME: 👆🏻 --}}
                        <h1 class="article-title">{{ $article->title }}</h1>
                        {{-- FIXME: render if flag present (should be probably on all list templates --}}
                        <a href="#" class="btn--partnerContent">Partner Content</a>
                        <div class="article-hero">
                            <img src="{{\App\Helpers\CDNHelper::show($article->banner,'1250x657')}}" alt="{{-- TODO:--}}">
                        </div>
                        <div class="article-metadata">
                            <div class="article-byline">
                                @if(!empty($article->author_data))
                                <address class="article-author">
                                    @foreach($article->author_data as $index => $author)
                                        @if(!empty($author->full_name))
                                            @if($index > 0){{' '.__('db.page.article.and').' '}}@else{{__('db.page.article.by_author').' '}}@endif
                                            <a href="{{route('show-author',['slug'=>$author->slug])}}"
                                                class="article-authorsPermalink">{{$author->full_name}}</a>
                                        @endif
                                    @endforeach
                                </address>
                                |
                                @endif
                                <time class="article-date"
                                    datetime="{{date('Y-m-d',strtotime($article->publishedDate))}}"
                                    title="{{date('d F Y',strtotime($article->publishedDate))}}">{{date('d F Y, H:i',strtotime($article->publishedDate))}}</time>
                            </div>
                            <div class="article-share">
                                @include('components.sharing_widget',[
                                'text' => $article->title.' '.$article->full_slug,
                                'title' => $article->title,
                                ])
                            </div>
                        </div>
                    </header>
                    <div class="article-body">
                        {!! $article->prepared_body !!}
                        @if($article->isLocked())
                            @include('components.paywall_block',[
                                'paywallContent' => $paywallContent
                            ])
                        @endif
                    </div>
                </article>
                @if($article->tags_data !== null)
                    <section class="section section--relatedTopics">
                        <header class="section-header">
                            <h4 class="section-title">{{__('db.page.article.tags')}}</h4>
                        </header>
                        <ul class="relatedTopics-list">
                            @foreach($article->tags_data as $tag)
                                <li class="relatedTopics-item"><a
                                href="{{route('tag',['slug'=>$tag->slug])}}">{{$tag->label}}</a></li>
                        @endforeach
                    </ul>
                </section>
                @endif
                <section class="section section--shareArticle">
                    <header class="section-header">
                        <h4 class="section-title">Share article</h4>{{-- FIXME: translation? --}}
                        {{-- FIXME: sharing should not show the save button, even if logged in --}}
                        @include('components.sharing_widget',[
                        'text' => $article->title.' '.$article->full_slug,
                        'title' => $article->title,
                        ])
                    </header>
                </section>
                <section class="section section--articleComments">
                    <header class="section-header">
                        <h4 class="section-title section-title--toggle js-article-comments-btn-toggle"><span
                                class="section-titleIconWrapper section-titleIconWrapper--toggleArrow">View
                                Comments</span>
                        </h4>
                    </header>
                    <div class="articleComments-container">
                        <div id="disqus_thread"
                             data-disqus-identifier="{{url()->current()}}"
                             data-disqus-title="{{$article->title}}"
                             data-disqus-url="{{url()->current()}}"></div>
                        <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
                        @push('scripts')
                            <script src="{{ProjectHelper::asset('js/disquss.js'.'?t='.$_SERVER['deployment_date'])}}"></script>
                        @endpush
                    </div>
                </section>
                @if($related !== null)
                <section class="section section--relatedArticles">
                    <header class="section-header">
                        <h4 class="section-title">{{__('db.page.article.related-articles')}}</h4>
                    </header>
                    <div class="articleSnippet-list">
                        @foreach($related as $item)
                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="{{url($item->slug)}}" class="articleSnippet-thumb">
                                <img alt="{{$item->headline}}"
                                src="{!! \App\Helpers\CDNHelper::show($item->imageHandle,'600x315')!!}"></a>
                            <div class="articleSnippet-content">
                                <h4 class="articleSnippet-title"><a
                                        href="{{url($item->slug)}}">{{$item->headline}}</a>
                                </h4>
                            </div>
                        </article>
                        @endforeach
                    </div>
                </section>
                @endif
            </div>
            <aside class="sidebar">
                @include('components.sidebar_ad')
                @include('components.most_popular')
                {{-- FIXME: render only from 1024px up --}}
                @if(true)
                    @include('components.latest_features')
                    @include('components.partner_content')
                    @include('components.sponsored_content')
                    @include('components.this_weeks_issue')
                    <div class="sidebar-smallWidgets">
                        @include('components.latest_jobs')
                        @include('components.podcasts')
                        @include('components.webcasts')
                        @include('components.newsletter')
                    </div>
                @endif
            </aside>
        </div>
    </div>
</main>
@endsection
