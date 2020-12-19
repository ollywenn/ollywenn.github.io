@extends('layouts.template')
@section('body-class', 'page--features-list')
@push('styles')
    <link rel="stylesheet" href="{{ProjectHelper::asset('css/page-features-list.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.page.features-list.title'))

@section('content')
    <main>
        <div class="main-segment">
            <div class="wrapper">
                <div class="main-content">
                    <article class="article">
                        <div class="article-header">
                            <h1 class="article-title">{{__('db.page.features-list.title')}}</h1>
                        </div>
                        <div class="article-body">
                            @if(!empty($features))
                            {{--TODO: title can be article-ctaBlockTitle--numberOrder or article-ctaBlockTitle--alphabeticalOrder --}}
                                @foreach($features as $feature)
                                <div class="article-ctaBlock">
                                    <h2 class="article-ctaBlockTitle article-ctaBlockTitle--numberOrder">{{$feature->title}}</h2>
                                    <a href="{{route('feature-download',['slug'=>$feature->slug])}}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">Download</a>
                                </div>
                                {{--TODO: remove this item - here just to show how it would look if 2 blocks --}}
                                <div class="article-ctaBlock">
                                    <h2 class="article-ctaBlockTitle article-ctaBlockTitle--alphabeticalOrder">Alphabetical Order</h2>
                                    <a href="#" class="btn btn--primary" target="_blank" rel="noopener noreferrer">Download</a>
                                </div>
                                @endforeach
                            @endif
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </main>
@endsection
