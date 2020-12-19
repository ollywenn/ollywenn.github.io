@extends('layouts.template')
@section('body-class', 'page--destination-single')
@push('styles')
<link rel="stylesheet"
    href="{{ProjectHelper::asset('css/page-destination-single.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', $destination->title)

@section('content')

<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        {{-- FIXME: render the name via BE --}}
                        <a href="/destinations" class="btn btn--back">Destinations</a>
                        {{-- FIXME: 👆🏻 --}}
                        <h1 class="article-title">{{ $destination->title }}</h1>
                        {{-- FIXME: render if flag present (should be probably on all list templates --}}
                        <a href="#" class="btn--partnerContent">Partner Content</a>
                        <div class="article-hero">
                            <img src="{{\App\Helpers\CDNHelper::show($destination->banner,'1250x657')}}" alt="{{-- TODO:--}}">
                        </div>
                        <div class="article-metadata">
                            <div class="article-byline">
                                @if(!empty($destination->author_data))
                                <address class="article-author">
                                    @foreach($destination->author_data as $index => $author)
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
                                    datetime="{{date('Y-m-d',strtotime($destination->publishedDate))}}"
                                    title="{{date('d F Y',strtotime($destination->publishedDate))}}">{{date('d F Y, H:i',strtotime($destination->publishedDate))}}</time>
                            </div>
                            <div class="article-share">
                                @include('components.sharing_widget',[
                                'text' => $destination->title.' '.$destination->full_slug,
                                'title' => $destination->title,
                                ])
                            </div>
                        </div>
                    </header>
                    <div class="article-body">
                        {!! $destination->body !!}

                        {{-- TODO: highlight Top Tip block --}}
                        <div class="article-highlightBlock">
                            <div class="article-highlightBlockTitle"><h4>Top<br/>Tip</h4></div>
                            <div class="article-highlightBlockContent">
                                <p>Flights have restarted with British Airways, Ryanair, easyJet and AirMalta.</p>
                                <p>Find out more about Malta’s reopening at the Travel Weekly Restart & Recovery Hub <a href="#">travelweekly.co.uk/restart-recovery/malta</a></p>
                            </div>
                        </div>

                        {{-- TODO: highlight Book it block --}}
                        <div class="article-highlightBlock article-highlightBlock--rounded">
                            <div class="article-highlightBlockTitle"><h4>Book<br/>it</h4></div>
                            <div class="article-highlightBlockContent">
                                <p>A B&B stay at Tivoli Marina Portimão starts at €472 per night in October for a one-bedroom apartment, with a minimum two-night stay.
                                <a href="#">tivolihotels.com/en</a></p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <aside class="sidebar">
                <div class="sidebarAd">
                    <a href="https://thecaterer.com" target="_blank" rel="noopener noreferrer"><img src="https://via.placeholder.com/300x250?text=MPU+300x250" alt="Your ad here"></a>
                </div>
                {{-- FIXME: re-enable this
                    @include('components.sidebar_ad')
                    --}}
                @include('components.most_popular')
            </aside>
        </div>
    </div>
</main>

@endsection
