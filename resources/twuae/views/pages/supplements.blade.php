@extends('layouts.template')
@section('body-class', 'page--supplement-editions')
@push('styles')
<link rel="stylesheet"
    href="{{ProjectHelper::asset('css/page-supplement-editions.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.pages.latest-supplements.title'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        <a href="/static/latest-edition" class="btn btn--back">Latest edition</a>
                        <h1 class="article-title">{{__('db.pages.latest-supplements.title')}}</h1>
                    </header>
                    <div class="article-body">
                        <ul class="article-magazineList">
                            @foreach($supplements as $entry)
                            <li>
                                <article class="article-magazineItem">
                                    <a class="article-magazineThumb" href="{{$entry->externalLink}}" target="_blank"
                                        rel="noopener noreferrer">
                                        <img src="{!! \App\Helpers\CDNHelper::show($entry->cover,'320x420')!!}"
                                            alt="{{$entry->title}}">
                                    </a>
                                    <h2 class="article-magazineTitle">
                                        <a class="btn" href="{{$entry->externalLink}}" target="_blank"
                                            rel="noopener noreferrer">{{$entry->title}}</a>
                                    </h2>
                                </article>
                            </li>
                            @endforeach
                        </ul>
                    </div>

            </div>
            </article>
        </div>
    </div>
    </div>
</main>
@endsection

