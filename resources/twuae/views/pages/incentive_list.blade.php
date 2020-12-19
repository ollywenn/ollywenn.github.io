@extends('layouts.template')
@section('body-class', 'page--incentives-list')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-incentives.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.page-title.incentives'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        <h1 class="article-title">{{__('db.page-title.incentives')}}</h1>
                    </header>
                    <div class="article-body js-loadmore-target">
                        @if(is_iterable($incentives))
                            @foreach($incentives as $index => $item)
                                <article class="articleSnippet-item js-article-template" itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="{{route('incentive-single',['slug' => $item->slug])}}" class="articleSnippet-thumb">
                                        <img alt="{{$item->title}}" src="{{\App\Helpers\CDNHelper::show($item->thumbnail(),'600x315')}}">
                                    </a>
                                    <div class="articleSnippet-content">
                                        <h3 class="articleSnippet-title"><a href="{{route('incentive-single',['slug' => $item->slug])}}">{{$item->title}}</a>
                                        </h3>
                                    </div>
                                </article>
                                {{-- FIXME: remove these hardcoded article items 👇🏻 --}}
                                <article class="articleSnippet-item js-article-template" itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="{{route('incentive-single',['slug' => $item->slug])}}" class="articleSnippet-thumb">
                                        <img alt="{{$item->title}}" src="{{\App\Helpers\CDNHelper::show($item->thumbnail(),'600x315')}}">
                                    </a>
                                    <div class="articleSnippet-content">
                                        <h3 class="articleSnippet-title"><a href="{{route('incentive-single',['slug' => $item->slug])}}">{{$item->title}}</a>
                                        </h3>
                                    </div>
                                </article>
                                <article class="articleSnippet-item js-article-template" itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="{{route('incentive-single',['slug' => $item->slug])}}" class="articleSnippet-thumb">
                                        <img alt="{{$item->title}}" src="{{\App\Helpers\CDNHelper::show($item->thumbnail(),'600x315')}}">
                                    </a>
                                    <div class="articleSnippet-content">
                                        <h3 class="articleSnippet-title"><a href="{{route('incentive-single',['slug' => $item->slug])}}">{{$item->title}}</a>
                                        </h3>
                                    </div>
                                </article>
                                <article class="articleSnippet-item js-article-template" itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="{{route('incentive-single',['slug' => $item->slug])}}" class="articleSnippet-thumb">
                                        <img alt="{{$item->title}}" src="{{\App\Helpers\CDNHelper::show($item->thumbnail(),'600x315')}}">
                                    </a>
                                    <div class="articleSnippet-content">
                                        <h3 class="articleSnippet-title"><a href="{{route('incentive-single',['slug' => $item->slug])}}">{{$item->title}}</a>
                                        </h3>
                                    </div>
                                </article>
                                <article class="articleSnippet-item js-article-template" itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="{{route('incentive-single',['slug' => $item->slug])}}" class="articleSnippet-thumb">
                                        <img alt="{{$item->title}}" src="{{\App\Helpers\CDNHelper::show($item->thumbnail(),'600x315')}}">
                                    </a>
                                    <div class="articleSnippet-content">
                                        <h3 class="articleSnippet-title"><a href="{{route('incentive-single',['slug' => $item->slug])}}">{{$item->title}}</a>
                                        </h3>
                                    </div>
                                </article>
                                <article class="articleSnippet-item js-article-template" itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="{{route('incentive-single',['slug' => $item->slug])}}" class="articleSnippet-thumb">
                                        <img alt="{{$item->title}}" src="{{\App\Helpers\CDNHelper::show($item->thumbnail(),'600x315')}}">
                                    </a>
                                    <div class="articleSnippet-content">
                                        <h3 class="articleSnippet-title"><a href="{{route('incentive-single',['slug' => $item->slug])}}">{{$item->title}}</a>
                                        </h3>
                                    </div>
                                </article>
                                {{-- FIXME: remove these hardcoded article items 👆🏻 --}}
                            @endforeach
                            @include('components.pagination', $pagination)
                        @endif
                    </div>
                    {{-- FIXME: @EzequielHPP we will ll probably need a load more thing here...

                        <button class="btn--loadMore js-btn-load-more" data-page="{{request()->has('page') ? request()->page : 2}}" data-limit="{{$totalPages}}">{{__('db.buttons.load-more')}}</button>
                        @push('scripts')
                            <script src="{{ProjectHelper::asset('/js/loadmore.js'.'?t='.$_SERVER['deployment_date'])}}">
                            </script>
                        @endpush
                    --}}
                </article>
                <button class="btn--loadMore js-btn-load-more"
                        data-page="{{--FIXME: --}}"
                        data-limit="{{--FIXME: --}}">{{__('db.buttons.load-more')}}</button>
                @push('scripts')
                <script src="{{ProjectHelper::asset('/js/loadmore.js'.'?t='.$_SERVER['deployment_date'])}}">
                </script>
                @endpush
            </div>
            <aside class="sidebar">
                @include('components.sidebar_ad')
                @include('components.most_popular')
            </aside>
        </div>
    </div>
</main>
@endsection
