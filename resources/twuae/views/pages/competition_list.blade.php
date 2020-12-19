@extends('layouts.template')
@section('body-class', 'page--competition-list')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-competitions.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.page-title.competitions'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        <h1 class="article-title article-title--list">{{__('db.page-title.competitions')}}</h1>
                    </header>
                    <div class="article-body">
                        @if(is_iterable($competitions))
                            @foreach($competitions as $index => $competition)
                                @if($index < 4)
                                    <article
                                        class="articleSnippet-item articleSnippet-item--fullBg"
                                        itemscope itemtype="http://schema.org/BlogPosting">
                                        <a href="{{$competition->full_slug}}" class="articleSnippet-thumb">
                                            @if($index < 4)
                                            <img src="{{\App\Helpers\CDNHelper::show($competition->thumbnail(),'750x384')}}">
                                            @else
                                            <img src="{{\App\Helpers\CDNHelper::show($competition->thumbnail(),'375x196')}}">
                                            @endif
                                        </a>
                                        <div class="articleSnippet-content">
                                            <h3 class="articleSnippet-title">
                                                {{$competition->title}}
                                            </h3>
                                        </div>
                                    </article>
                                @endif
                            @endforeach
                        @endif
                    </div>
                </article>
            </div>
            <div class="main-content main-content--last">
                <article class="article">
                    <div class="article-body js-loadmore-target">
                        @if(is_iterable($competitions))
                            @foreach($competitions as $index => $competition)
                                @if($index > 3)
                                {{-- FIXME: this should render even items (6 or 12 items ideally), not odd. Same for loaded more items --}}
                                    <article
                                        class="articleSnippet-item"
                                        itemscope itemtype="http://schema.org/BlogPosting">
                                        <a href="{{$competition->full_slug}}" class="articleSnippet-thumb">
                                            @if($index < 4)
                                            <img src="{{\App\Helpers\CDNHelper::show($competition->thumbnail(),'750x384')}}">
                                            @else
                                            <img src="{{\App\Helpers\CDNHelper::show($competition->thumbnail(),'375x196')}}">
                                            @endif
                                        </a>
                                        <div class="articleSnippet-content">
                                            <h3 class="articleSnippet-title">
                                                {{$competition->title}}
                                            </h3>
                                        </div>
                                    </article>
                                @endif
                            @endforeach
                        @endif
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
