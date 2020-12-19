@extends('layouts.template')
@section('body-class', 'page--latest-edition')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-latest-edition.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.pages.latest-edition.title'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        <h1 class="article-title">{{__('db.pages.latest-edition.title')}}</h1>
                        <h2 class="article-subtitle">{{date('M d',strtotime($latestEdition->publishedDate))}}</h2>
                        <div class="article-hero">
                            <a href="{{$latestEdition->externalLink}}" target="_blank" rel="noopener noreferrer"><img
                                    src="{!! \App\Helpers\CDNHelper::show($latestEdition->cover,'325x433')!!}"
                                    alt="{{$latestEdition->title}}"></a>
                        </div>
                    </header>
                    <div class="article-body article-body--digitalVersionContent">
                        <h2>Full digital version</h2>
                        <p>Travel Weekly releases a <strong>full digital version</strong> of the magazine every
                            Wednesday.</p>
                        <a href="{{$latestEdition->externalLink}}" class="btn btn--primary" target="_blank"
                            rel="noopener noreferrer">Read latest edition</a>
                    </div>
                    <div class="article-body article-body--contentMenu">
                        <ul class="article-linksList">
                            <li><a href="/static/edition-archive">Edition archive</a></li>
                            <li><a href="/static/supplements-and-special-editions">Supplements & Special editions</a>
                            </li>
                        </ul>
                    </div>
                    <div class="article-body article-body--ctas">
                        <section class="article-bodySection">
                            <header class="article-bodySectionHeader">
                                <h2 class="article-bodySectionTitle">Digital edition</h2>
                            </header>
                            <p>To receive the digital edition as soon as it comes out:</p>
                            <a href="#" class="btn btn--secondary">Subscribe to email</a>
                        </section>

                        <section class="article-bodySection">
                            <header class="article-bodySectionHeader">
                                <h2 class="article-bodySectionTitle">Free copy</h2>
                            </header>
                            <p>You could be eligible for a free copy of the magazine each Thursday</p>
                            <a href="#" class="btn btn--secondary">Subscribe to magazine</a>
                        </section>
                    </div>
                </article>
            </div>
        </div>
    </div>
</main>
@endsection
