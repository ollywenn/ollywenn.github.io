@section('body-class', 'page--home')
@push('styles')
<link rel="preload" href="{{ProjectHelper::asset('css/page-home.css').'?t='.$_SERVER['deployment_date']}}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{{ProjectHelper::asset('css/page-home.css').'?t='.$_SERVER['deployment_date']}}"></noscript>
@endpush

@section('schema')
@include('schemas.homepage',[
'latest'=>$heroArticles['entries']
])
@endsection

<main>
    <div class="main-segment main-segment--homeHero">
        <div class="wrapper">
            <div class="main-content">
                @if(!empty($heroArticles))
                    <div class="section section--mainHero">
                        <div class="mainHero-col1">
                            @for($i = 0; $i < 6; $i++)
                                <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="#" class="articleSnippet-thumb">
                                        @if($i == 0)
                                        <img alt="{{-- TODO:--}}"
                                            src="https://media.graphcms.com/resize=w:920,h:483,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:15/HmMRRsdKSZSUEmQV7cIp">
                                        @else
                                        <img alt="{{-- TODO:--}}"
                                            src="https://media.graphcms.com/resize=w:700,h:368,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:15/HmMRRsdKSZSUEmQV7cIp">
                                        @endif
                                    </a>

                                    <div class="articleSnippet-content">
                                        @if($i == 0)
                                            <h1 class="articleSnippet-title">
                                        @else
                                            <h2 class="articleSnippet-title">
                                        @endif
                                            <a href="#">Item {{$i}} - Q&A: Sam Hyson, Kakadu National Park Ranger</a>
                                        @if($i == 0)
                                            </h1>
                                        @else
                                            </h2>
                                        @endif
                                        @if($i == 0)
                                            <p>Katie Mcgonagle interviews Sam Hyson</p>
                                        @endif
                                    </div>
                                </article>
                            @endfor
                        </div>
                        <div class="mainHero-col2">
                            @for($i = 1; $i < 3; $i++)
                                <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="#" class="articleSnippet-thumb">
                                        <img alt="{{-- TODO:--}}"
                                            src="https://media.graphcms.com/resize=w:600,h:315,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:15/HmMRRsdKSZSUEmQV7cIp">
                                    </a>
                                    <div class="articleSnippet-content">
                                        <h2 class="articleSnippet-title">
                                            <a href="#">Item {{$i}} - Q&A: Sam Hyson, Kakadu National Park Ranger</a>
                                        </h2>
                                    </div>
                                </article>
                            @endfor
                        </div>
                        <div class="mainHero-col3">
                            @for($i = 3; $i < 6; $i++)
                                <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                                    <a href="#" class="articleSnippet-thumb">
                                        <img alt="{{-- TODO:--}}"
                                            src="https://media.graphcms.com/resize=w:600,h:315,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:15/HmMRRsdKSZSUEmQV7cIp">
                                    </a>
                                    <div class="articleSnippet-content">
                                        <h2 class="articleSnippet-title">
                                            <a href="#">Item {{$i}} - Q&A: Sam Hyson, Kakadu National Park Ranger</a>
                                        </h2>
                                    </div>
                                </article>
                            @endfor
                        </div>
                        <a href="/news" class="btn btn--viewAllNews">View all news</a>
                    </div>
                @endif
            </div>
        </div>
    </div>

    @if(!empty($highlights))
        <div class="main-segment main-segment--highlights">
            <div class="wrapper">
                <div class="main-content main-content--full">
                    <section class="section section--highlights">
                        <header class="section-header">
                            <h2 class="section-title">{{__('db.homepage-section.highlights')}}</h2>
                            <a href="#" class="section-viewAll btn btn--viewAll">View All</a>
                        </header>
                        @foreach($highlights['entries'] as $index => $entry)
                            @for($i = 0; $i < 5; $i++) {{-- FIXME: hook up with BE --}}
                                <article class="articleSnippet-item articleSnippet-item--fullBg" itemscope
                                    itemtype="http://schema.org/BlogPosting">
                                    <a href="{{$entry['link']}}" class="articleSnippet-thumb">
                                        @if($i < 1)
                                            <img src="//via.placeholder.com/1000x525" alt="{{-- TODO:--}}">
                                        @else
                                            <img src="//via.placeholder.com/600x315" alt="{{-- TODO:--}}">
                                        @endif
                                    </a>
                                    <div class="articleSnippet-content">
                                        {{-- FIXME: render if flag present (should be probably on all list templates --}}
                                        <span class="btn--partnerContent">Partner Content</span>
                                        <h3 class="articleSnippet-title">{{$entry['title']}}</h3>
                                    </div>
                                </article>
                            @endfor
                        @endforeach
                    </section>
                </div>
            </div>
        </div>
    @endif

    {{-- TODO: This shows as an MPU on designs, but should depend on the ad platform --}}
    @if(isset($adBlocks) && array_key_exists('superLeaderboard',$adBlocks))
        <div class="main-segment main-segment--ad">
            <div class="section section--ad">
                <div class="wrapper">
                    <div class="ad ad--adtype">
                        {!! str_replace('window.','',$adBlocks['superLeaderboard']) !!}
                    </div>
                </div>
            </div>
        </div>
    @endif

    @if(isset($commentSection))
        <div class="main-segment main-segment--comment">
            <div class="wrapper">
                <div class="main-content">
                    <section class="section section--comment">
                        <header class="section-header">
                            <h2 class="section-title">{{__('db.homepage-section.opinion')}}</h2>
                            <a href="/in-depth/comment" class="section-viewAll btn btn--viewAll">View All</a>
                        </header>
                        @foreach($commentSection as $index => $entry)
                            <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                                <a href="{{$entry->slug ?? '#'}}" class="articleSnippet-thumb">
                                    @if($index == 0)
                                        <img src="{{\App\Helpers\CDNHelper::show($entry->imageHandle,'830x436')}}" alt="{{-- TODO:--}}">
                                    @else
                                        <img src="{{\App\Helpers\CDNHelper::show($entry->imageHandle,'600x315')}}" alt="{{-- TODO:--}}">
                                    @endif
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title">
                                        <a href="{{$entry->slug ?? '#'}}">{{\Illuminate\Support\Str::limit($entry->headline, 44, $end='...') }}</a>
                                    </h3>
                                    @if($index == 0) {{-- TODO: should always be wrapped in a paragraph --}}
                                        {!! $entry->shortText !!}
                                    @endif
                                </div>
                            </article>
                        @endforeach
                    </section>
                </div>
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
    @endif

    @if(!empty($destinations))
        <div class="main-segment main-segment--destinations">
            <div class="wrapper">
                <div class="main-content">
                    <section class="section section--destinations">
                        <header class="section-header">
                            <h2 class="section-title">{{__('db.homepage-section.destinations')}}</h2>
                            <a href="/destinations" class="section-viewAll btn btn--viewAll">View All</a>
                        </header>
                        @foreach($destinations as $index => $entry)
                            {{-- FIXME: $entry->full_slug does not seem to be working --}}
                            <article class="articleSnippet-item @if($index == 0) articleSnippet-item--fullBg @endif" itemscope
                                itemtype="http://schema.org/BlogPosting">
                                <a href="{{$entry->full_slug}}" class="articleSnippet-thumb">
                                    @if($index == 0)
                                    <img src="{{\App\Helpers\CDNHelper::show($entry->bannerImage,'1250x657')}}" alt="{{-- TODO:--}}">
                                    @else
                                    <img src="{{\App\Helpers\CDNHelper::show($entry->bannerImage,'600x315')}}" alt="{{-- TODO:--}}">
                                    @endif
                                </a>
                                <div class="articleSnippet-content">
                                    <h3 class="articleSnippet-title">
                                        <a href="{{$entry->full_slug}}">
                                            @if($index != 0)
                                                {{\Illuminate\Support\Str::limit($entry->title, 44, $end='...')}}
                                            @else
                                                {{\Illuminate\Support\Str::limit($entry->title, 70, $end='...')}}
                                            @endif
                                        </a>
                                    </h3>
                                    @if($index == 0)
                                        @if(strpos($entry->introduction,'<p>') === false){!! '<p>' !!}@endif
                                                {!! $entry->introduction !!}
                                        @if(strpos($entry->introduction,'<p>') === false){!! '</p>' !!}@endif
                                        <div class="article-byline">
                                            <address class="article-author">By <a href="#" class="article-authorsPermalink">Laura French</a>
                                            </address>
                                        </div>
                                    @endif
                                </div>
                            </article>
                        @endforeach
                    </section>
                </div>
                <aside class="sidebar">
                    {{-- FIXME: render from 667px onwards --}}
                    @if(true)
                        @include('components.partner_content')
                    @endif
                    {{-- FIXME: render up to 1023px --}}
                    @if(true)
                        @include('components.newsletter')
                    @endif
                </aside>
            </div>
        </div>
    @endif

    <div class="main-segment main-segment--group">
        <div class="wrapper">
            <div class="main-content">
                <section class="section section--photosAndVideos">
                    <header class="section-header">
                        <h2 class="section-title">{{__('db.homepage-section.photos')}}</h2>
                        <a href="#" class="section-viewAll btn btn--viewAll">View All</a>
                    </header>
                    @foreach($photosVideos as $index => $entry)
                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="{{route('media-single',['slug' => $entry->slug])}}" class="articleSnippet-thumb">
                                {{-- FIXME: this thumbnailUrl function seems to be spitting the wrong ratio image --}}
                                @if($index == 0)
                                <img src="{{\App\Helpers\CDNHelper::show($entry->thumbnailUrl(),'1250x657')}}" alt="{{-- TODO:--}}">
                                @else
                                <img src="{{\App\Helpers\CDNHelper::show($entry->thumbnailUrl(),'600x315')}}" alt="{{-- TODO:--}}">
                                @endif
                            </a>
                            <div class="articleSnippet-content">
                                <h3 class="articleSnippet-title">
                                    @if($index != 0) <a href="{{route('media-single',['slug' => $entry->slug])}}">@endif
                                    @if($index != 0)
                                        {{\Illuminate\Support\Str::limit($entry->title, 44, $end='...')}}
                                    @else
                                        {{\Illuminate\Support\Str::limit($entry->title, 70, $end='...')}}
                                    @endif
                                    @if($index != 0) </a>@endif
                                </h3>
                                <div class="articleSnippet-metaData">
                                    <ul class="article-mediaList">
                                        <li
                                            class="@if($entry->iconData()['icon'] === 'Video'){{'article-videoLength'}}@else{{'article-photoItems'}}@endif">
                                            {{$entry->iconData()['count']}}
                                        </li>
                                    </ul>
                                </div>
                                {{-- FIXME: should show if partner content --}}
                                @if(true)
                                <span class="btn--partnerContent">Partner Content</span>
                                @endif
                            </div>
                        </article>
                    @endforeach
                </section>
                <section class="section sidebar--extra">
                    @include('components.podcasts')
                    @include('components.newsletter')
                </section>
                <section class="section section--competitions">
                    <header class="section-header">
                        <h2 class="section-title">Competitions</h2>
                        <a href="/competitions" class="section-viewAll btn btn--viewAll">View All</a>
                    </header>
                    {{-- FIXME: needs to be hooked to BE --}}
                    <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                        <a href="/news/tour-operators/comment-a-stimulus-package-is-needed-to-save-domestic-tourism" class="articleSnippet-thumb">
                            <img src="https://media.graphcms.com/resize=w:830,h:436,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/rfkIHWoxQl3hVVGQn9iC" alt="">
                        </a>
                        <div class="articleSnippet-content">
                            <h3 class="articleSnippet-title">
                                <a href="/news/tour-operators/comment-a-stimulus-package-is-needed-to-save-domestic-tourism">Comment: A stimulus package is needed to sav...</a>
                            </h3>
                        </div>
                    </article>
                    <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                        <a href="/news/comment-is-the-fear-of-covid-19-outweighing-the-actual-risk" class="articleSnippet-thumb">
                            <img src="https://media.graphcms.com/resize=w:600,h:315,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/ZkDuQMbFR6eaqAuA4zZv" alt="">
                        </a>
                        <div class="articleSnippet-content">
                            <h3 class="articleSnippet-title">
                                <a href="/news/comment-is-the-fear-of-covid-19-outweighing-the-actual-risk">Comment: Is the fear of Covid-19 outweighing...</a>
                            </h3>
                        </div>
                    </article>
                    <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                        <a href="/news/travel-agents/comment-adversity-can-bring-hygiene-opportunities" class="articleSnippet-thumb">
                            <img src="https://media.graphcms.com/resize=w:600,h:315,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/YT8JOyf0Q467EKerOesP" alt="">
                        </a>
                        <div class="articleSnippet-content">
                            <h3 class="articleSnippet-title">
                                <a href="/news/travel-agents/comment-adversity-can-bring-hygiene-opportunities">Comment: Adversity can bring hygiene opportu...</a>
                            </h3>
                        </div>
                    </article>
                    <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                        <a href="/news/tour-operators/comment-suppliers-must-ensure-the-price-is-right" class="articleSnippet-thumb">
                            <img src="https://media.graphcms.com/resize=w:600,h:315,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/7Df2S4fySke9RSYU9MTV" alt="">
                        </a>
                        <div class="articleSnippet-content">
                            <h3 class="articleSnippet-title">
                                <a href="/news/tour-operators/comment-suppliers-must-ensure-the-price-is-right">Comment: Suppliers must ensure the price is...</a>
                            </h3>
                        </div>
                    </article>
                </section>
                <section class="section section--events">
                    <header class="section-header">
                        <h2 class="section-title">{{__('db.homepage-section.events')}}</h2>
                        <a href="#" class="section-viewAll btn btn--viewAll">View All</a>
                    </header>
                    @foreach($events as $entry)
                    <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                        <a href="{{$entry->url}}" target="_blank" class="articleSnippet-thumb">
                            @if($index == 0)
                            <img src="{{\App\Helpers\CDNHelper::show($entry->thumbnail,'830x436')}}" alt="{{-- TODO:--}}">
                            @else
                            <img src="{{\App\Helpers\CDNHelper::show($entry->thumbnail,'600x315')}}" alt="{{-- TODO:--}}">
                            @endif
                        </a>
                        <div class="article-extras">
                            @if(!empty($entry->album))
                                <a href="{{route('media-single',['route' => $entry->album()->slug])}}"
                                    title="{{$entry->album()->title}}">
                                    Album
                                </a>
                            @endif
                            @if(!empty($entry->video))
                                <a href="{{$entry->video()->url}}" title="{{$entry->video()->title}}" target="_blank">
                                    Video
                                </a>
                            @endif
                            @if(!empty($entry->ticketingUrl))
                                <a href="{{$entry->ticketingUrl}}" title="Ticketing URL" target="_blank">
                                    Ticketing Url
                                </a>
                            @endif
                        </div>
                        <div class="articleSnippet-content">
                            <h3 class="articleSnippet-title"><a
                                    href="{{$entry->url}}">{{\Illuminate\Support\Str::limit($entry->title, 44, $end='...') }}</a>
                            </h3>
                            @if($index == 0)
                            <p>{{\Illuminate\Support\Str::limit($entry->description)}}</p>
                            @endif
                        </div>
                    </article>
                    @endforeach
                </section>
            </div>
            <aside class="sidebar">

                @include('components.this_weeks_issue')
                @include('components.latest_jobs')
                @include('components.podcasts')
                @include('components.webcasts')
                @include('components.newsletter')
            </aside>
        </div>
    </div>
</main>
