@extends('layouts.template')
@section('body-class', 'page--event-single')

@push('styles')
    <link rel="stylesheet" href="{{ProjectHelper::asset('css/page-events.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('metaImage'){{$event->meta_image}}@endsection
@section('schema')
    @include('schemas.event',['event'=>$event])
    @include('schemas.breadcrumb',['breadcrumb' => [
    __('db.pages.events.title') => route('events'),
    $event->title => ''
]])
@endsection

@section('title', $event->title)

@section('content')

    <main>
        <div class="main-segment">
            <div class="wrapper">
                <div class="main-content">
                    <article class="article">
                        <header class="article-header">
                            <h1 class="article-title">{{ $event->title }}</h1>
                            <div class="article-hero">
                                <img src="{{\App\Helpers\CDNHelper::show($event->thumbnail(),'1900x500')}}" alt="{{-- TODO:--}}">
                            </div>
                            <div class="article-metadata">
                                <div class="article-share">
                                    @include('components.sharing_widget',[
                                        'text' => $event->title.' '.request()->fullUrl(),
                                        'title' => $event->title,
                                    ])
                                </div>
                            </div>
                        </header>
                        <div class="article-body">
                            {!! $event->location !!}
                            {!! $event->description !!}
                            <a href="{{$event->url}}" class="button" target="_blank">
                                {{__('db.pages.events.open_event')}}
                            </a>
                        </div>
                    </article>
                    <section class="section section--shareArticle">
                        <header class="section-header">
                            <h4 class="section-title">Share event</h4>
                            @include('components.sharing_widget',[
                                'text' => $event->title.' '.request()->fullUrl(),
                                'title' => $event->title,
                            ])
                        </header>
                    </section>
                </div>
                <aside class="sidebar">
                    @include('components.sidebar_ad')
                    @include('components.most_popular')
                    @include('components.latest_features')
                    @include('components.sponsored_content')
                    @include('components.this_weeks_issue')
                </aside>
            </div>
        </div>
    </main>
@endsection
