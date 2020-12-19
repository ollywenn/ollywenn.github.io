@extends('layouts.template')
@section('body-class', 'page--webcasts-list page--media page--media--default')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-media.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.page-title.webcasts'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        <h1 class="article-title article-title--list">{{__('db.page-title.webcasts')}}</h1>
                    </header>
                    <div class="article-body">
                        @foreach($casts as $index => $webcast)
                            <article
                                class="articleSnippet-item @if($index  === 0) articleSnippet-item--fullBg @endif"
                                itemscope itemtype="http://schema.org/BlogPosting">
                                <a href="{{route('webcast-single',['slug' => $webcast->slug])}}" class="articleSnippet-thumb">
                                    @if($index  === 0)
                                    <img src="{{\App\Helpers\CDNHelper::show($webcast->thumbnail(),'750x384')}}">
                                    @else
                                    <img src="{{\App\Helpers\CDNHelper::show($webcast->thumbnail(),'375x196')}}">
                                    @endif
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title"><a href="{{route('webcast-single',['slug' => $webcast->slug])}}">{{$webcast->title}}</a></h3>
                                    <div class="articleSnippet-metaData">
                                        <ul class="article-mediaList">
                                            {{-- FIXME: toggle icon class and content--}}
                                            <li class="article-webcast">2:50</li>
                                        </ul>
                                        {{-- FIXME: render if flag present (should be probably on all list templates --}}
                                        @if($index % 2 === 0)
                                            <a href="#" class="btn--partnerContent">Partner Content</a>
                                        @endif
                                    </div>
                                </div>
                            </article>
                        @endforeach
                    </div>
                    {{-- FIXME: load more needs to work --}}
                    <button class="btn--loadMore js-btn-load-more"
                        data-page="{{request()->has('page') ? request()->page : 2}}"
                        data-limit="{{-- FIXME: needs BE var --}}">{{__('db.buttons.load-more')}}</button>
                    @push('scripts')
                    <script src="{{ProjectHelper::asset('/js/loadmore.js'.'?t='.$_SERVER['deployment_date'])}}">
                    </script>
                    @endpush
                </article>
            </div>
            <aside class="sidebar">
                @include('components.sidebar_ad')
                {{-- FIXME: render only on 1024px up --}}
                @if(true)
                    @include('components.most_popular')
                    @include('components.latest_jobs')
                @endif
            </aside>
        </div>
    </div>
</main>
@endsection
