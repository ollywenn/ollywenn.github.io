@extends('layouts.template')
@section('body-class', 'page--our-team-single')
@push('styles')
    <link rel="stylesheet"
          href="{{ProjectHelper::asset('css/page-author-single.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', $member->name)

@section('content')
    <main>
        <div class="main-segment">
            <div class="wrapper">
                <div class="main-content">
                    <article class="article article--ourTeam-single">
                        <a href="{{route('our-team')}}" class="btn btn--back">{{__('db.pages.our-team.title')}}</a>
                        <header class="article-header">
                            <h1 class="article-title">{{$member->name}}</h1>
                        </header>
                        <figure class="ourTeam-author">
                            <img class="author-thumbnail"
                                 src="{!! \App\Helpers\CDNHelper::show($member->image(),'750x718') !!}"
                                 alt="authorsName">
                            <figcaption class="author-details">
                                <h2 class="author-title">{{$member->name}}</h2>
                                <h3 class="author-position">{{$member->jobRole}}</h3>
                                @if(!empty($member->email) || !empty($member->phone))
                                    <div class="author-contacts">
                                        @if(!empty($member->email))
                                            <a href="mailto:{{$member->email}}"
                                               class="author-email">{{$member->email}}</a>
                                        @endif
                                        @if(!empty($member->phone))
                                            <a href="tel:{{str_replace(' ','',$member->phone)}}"
                                               class="author-phone">{{$member->phone}}</a>
                                        @endif
                                    </div>
                                @endif
                                @if(!empty($member->twitter))
                                    <ul class="author-socialMediaChannels">
                                        <li class="author-socialMediaChannelsItem"><a
                                                    class="author-socialMediaChannelLink author-socialMediaChannelLink--tt"
                                                    href="http://twitter.com/{{$member->twitter}}" target="_blank">{{ '@'.$member->twitter
                                                }}</a></li>
                                    </ul>
                                @endif
                            </figcaption>
                        </figure>
                        @if(!empty($member->biography))
                            <div class="author-biography">
                                <h2 class="author-biographyTitle">{{__('db.pages.our-team.biography')}}</h2>
                                {!! $member->biography !!}
                            </div>
                        @endif
                        @if(!empty($member->articles()))
                            <div class="author-articles">
                                <h2 class="author-biographyTitle">{{__('db.pages.our-team.latest_articles').' '.$member->name}}
                                </h2>
                                @foreach($member->articles() as $article)
                                    <article class="articleSnippet-item" itemscope
                                             itemtype="http://schema.org/BlogPosting">
                                        <a href="{{url($article->slug)}}" class="articleSnippet-thumb"
                                           style="background-image: url('{!! \App\Helpers\CDNHelper::show($article->imageHandle,'300x160')!!}')">
                                        </a>
                                        <div class="articleSnippet-content">
                                            <h3 class="articleSnippet-title"><a
                                                        href="{{url($article->slug)}}">{{$article->headline}}</a>
                                            </h3>
                                            <p>{{\Illuminate\Support\Str::limit($article->shortText, 100).' '}}</p>
                                        </div>
                                    </article>
                                @endforeach
                            </div>
                            @include('components.pagination', $pagination)
                        @endif
                    </article>
                </div>
                <aside class="sidebar">
                    @include('components.sidebar_ad')
                    @include('components.most_popular')
                    @include('components.latest_features')
                    @include('components.partner_content')
                    @include('components.sponsored_content')
                    <div class="sidebar-smallWidgets">
                        @if(array_key_exists('sidebar', $staticBoxes))
                            <div class="sidebar-smallWidgets">
                                @foreach($staticBoxes['sidebar'] as $box)
                                    @if(\Illuminate\Support\Facades\View::exists('components.'.$box['slug']))
                                        @include('components.'.$box['slug'])
                                    @else
                                        <p>{{'components.'.$box['slug']}}</p>
                                    @endif

                                @endforeach
                            </div>
                        @endif
                    </div>
                </aside>

            </div>
        </div>
    </main>
@endsection
