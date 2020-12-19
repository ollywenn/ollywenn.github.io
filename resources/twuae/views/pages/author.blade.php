@extends('layouts.template')
@section('body-class', 'page--author-single')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-author-single.css').'?t='.$_SERVER['deployment_date']}}">
@endpush
@section('schema')
@include('schemas.author',[
'name'=>$author->full_name,
'author_url'=>request()->url(),
'socials' => $socials,
'jobTitle' => $author->role
])
@include('schemas.breadcrumb',['breadcrumb' => [
'/' => __('db.navigation.home'),
''=> $author->full_name
]])
@endsection

@section('title', $author->full_name)

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article article--ourTeam-single">
                    <header class="article-header">
                        <h1 class="article-title">{{$author->full_name}}</h1>
                    </header>
                    <figure class="ourTeam-author">
                        <img class="author-thumbnail"
                            src="{!! \App\Helpers\CDNHelper::show($author->profile_image,'750x718') !!}"
                            alt="authorsName">
                        <figcaption class="author-details">
                            <h2 class="author-title">{{$author->full_name}}</h2>
                            <h3 class="author-position">{{$author->role}}</h3>
                            @if(!empty($author->email))
                            <div class="author-contacts">
                                @if(!empty($author->email))
                                <a href="mailto:{{$author->email}}" class="author-email">{{$author->email}}</a>
                                @endif
                            </div>
                            @endif
                            <ul class="author-socialMediaChannels">
                                @if(!empty($author->socialTwitter))
                                <li class="author-socialMediaChannelsItem"><a
                                        class="author-socialMediaChannelLink author-socialMediaChannelLink--tt"
                                        href="{{$author->socialTwitter}}" target="_blank">{{ '@'.$author->socialTwitter
                                                }}</a></li>
                                @endif
                                @if(!empty($author->socialFacebook))
                                <li class="author-socialMediaChannelsItem"><a
                                        class="author-socialMediaChannelLink author-socialMediaChannelLink--fb"
                                        href="{{$author->socialFacebook}}"
                                        target="_blank">{{ $author->socialFacebook }}</a></li>
                                @endif
                                @if(!empty($author->socialLinkedin))
                                <li class="author-socialMediaChannelsItem"><a
                                        class="author-socialMediaChannelLink author-socialMediaChannelLink--ln"
                                        href="{{$author->socialLinkedin}}"
                                        target="_blank">{{ $author->socialLinkedin }}</a></li>
                                @endif
                                @if(!empty($author->socialPinterest))
                                <li class="author-socialMediaChannelsItem"><a
                                        class="author-socialMediaChannelLink author-socialMediaChannelLink--pn"
                                        href="{{$author->socialPinterest}}"
                                        target="_blank">{{ $author->socialPinterest }}</a></li>
                                @endif
                                @if(!empty($author->socialInstagram))
                                <li class="author-socialMediaChannelsItem"><a
                                        class="author-socialMediaChannelLink author-socialMediaChannelLink--in"
                                        href="{{$author->socialInstagram}}"
                                        target="_blank">{{ $author->socialInstagram }}</a></li>
                                @endif
                            </ul>
                        </figcaption>
                    </figure>
                    @if(!empty($author->summary))
                    <div class="author-biography">
                        <h2 class="author-biographyTitle">{{__('db.pages.our-team.biography')}}</h2>
                        {!! $author->summary !!}
                    </div>
                    @endif
                    @if(!empty($author->articles()))
                    <h2 class="author-biographyTitle">{{__('db.pages.our-team.latest_articles').' '.$author->name}}</h2>
                    <div class="author-articles">
                        @foreach($author->articles() as $article)
                            <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                                <a href="{{url($article->slug)}}" class="articleSnippet-thumb">
                                    <img src="{!! \App\Helpers\CDNHelper::show($article->imageHandle,'300x160')!!}" alt="{{-- TODO: --}}">
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
        </div>
    </div>
</main>
@endsection
