@extends('layouts.template')
@section('body-class', 'page--editions-archive')
@push('styles')
<link rel="stylesheet"
    href="{{ProjectHelper::asset('css/page-editions-archive.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.pages.archive.title'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        <a href="/static/latest-edition" class="btn btn--back">Latest edition</a>
                        <h1 class="article-title">{{__('db.pages.archive.title')}}</h1>
                    </header>
                    <div class="article-body">
                        @php($lastMonth = date('F Y',strtotime($archive[0]->publishedDate)))
                        <section class="article-bodySection">
                            <header class="article-bodySectionHeader">
                                <h2 class="article-subtitle">{{$lastMonth}}</h2>
                            </header>
                            <ul class="article-linksList">
                                @foreach($archive as $entry)
                                {{-- This if statement checks if the date of the edition doesn;t match the privous one so it creates a new section --}}
                                @if(date('F Y',strtotime($entry->publishedDate)) !== $lastMonth)
                                @php($lastMonth = date('F Y',strtotime($entry->publishedDate)))
                            </ul>
                        </section>
                        <section class="article-bodySection">
                            <header class="article-bodySectionHeader">
                                <h2 class="article-subtitle">{{$lastMonth}}</h2>
                            </header>
                            <ul class="article-linksList">
                                @endif
                                <li>
                                    <a href="{{$entry->externalLink}}" target="_blank"
                                        rel="noopener noreferrer">{{$entry->title}}</a>
                                    <p>{{$entry->description}}</p>
                                </li>
                                @endforeach
                            </ul>
                        </section>
                    </div>
                </article>
            </div>
        </div>
    </div>
</main>
@endsection
