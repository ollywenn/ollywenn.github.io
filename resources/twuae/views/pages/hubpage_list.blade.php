@extends('layouts.template')
@section('body-class', 'page--hub-list')
@push('styles')
    <link rel="stylesheet" href="{{ProjectHelper::asset('css/page-hub.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', $hub->title)

@section('content')

<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <div class="article-header">
                        <div class="article-hero">
                            <img src="https://travelweekly.co.uk/images/travelweekly/rediscover/listing_banner_new_2.jpg" alt="">
                            <a href="#" class="article-heroBody">
                                <div class="article-heroBodyThumbWrapper">
                                    <img class="article-heroBodyThumb" src="https://via.placeholder.com/218x145?text=218x145" alt="{{-- TODO:--}}" />
                                </div>
                                <h1 class="article-heroTitle">
                                    <span class="article-heroTitleInner">Destination Canada</span>
                                </h1>
                                <div class="article-heroContent">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque libero illo, quas laboriosam nobis obcaecati voluptatum magnam, veritatis voluptate dignissimos labore minus. Saepe ipsum, a deserunt odit quasi maiores!</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="article-body">
                        @for($index = 0; $index < 10; $index++)
                            <article class="articleSnippet-item @if($index == 0){{'articleSnippet-item--fullImg'}}@endif " itemscope itemtype="http://schema.org/BlogPosting">
                                <a href="https://local.travelweekly.ae/destinations/qa-sam-hyson-kakadu-national-park-ranger" class="articleSnippet-thumb">
                                    @if(@index == 0)
                                        <img alt="" src="https://media.graphcms.com/resize=w:1250,h:657,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/HmMRRsdKSZSUEmQV7cIp">
                                    @else
                                        <img alt="" src="https://media.graphcms.com/resize=w:750,h:384,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/HmMRRsdKSZSUEmQV7cIp">
                                    @endif
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title"><a href="https://local.travelweekly.ae/destinations/qa-sam-hyson-kakadu-national-park-ranger">Q&amp;A: Sam Hyson, Kakadu National Park Ranger</a>
                                    </h3>
                                    @if($index == 0)
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident laudantium quo deserunt eaque quisquam expedita</p>
                                    @endif
                                    {{-- TODO: Confirm with TW team if this should show as they are on new designs --}}
                                    <div class="articleSnippet-metaData">
                                        <ul class="article-mediaList">
                                            <li class="@if(true){{'article-videoLength'}}@else{{'article-photoItems'}}@endif">2:50</li>
                                        </ul>
                                        <span href="#" class="btn--partnerContent">Partner Content</span>
                                    </div>
                            </article>
                        @endfor
                    </div>
                    <button class="btn--loadMore js-btn-load-more" data-page="{{--FIXME: hook up BE --}}" data-limit="{{--FIXME: hook up BE --}}">{{__('db.buttons.load-more')}}</button>
                    @push('scripts')
                        <script src="{{ProjectHelper::asset('/js/loadmore.js'.'?t='.$_SERVER['deployment_date'])}}">
                        </script>
                    @endpush
                </article>
            </div>
        </div>
    </div>
</main>
@endsection
