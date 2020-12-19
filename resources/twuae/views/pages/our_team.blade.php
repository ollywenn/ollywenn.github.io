@extends('layouts.template')
@section('body-class', 'page--our-team')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-our-team.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.pages.our-team.title'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article article--ourTeam">
                    <header class="article-header">
                        <h1 class="article-title">{{__('db.pages.our-team.title')}}</h1>
                        <div class="filter">
                            <ul class="filter-list js-our-team-filter">
                                @foreach($categories as $category => $members)
                                <li>
                                    <button
                                        class="filter-item @if($category === array_keys($categories)[0]){{'is-active'}}@endif "
                                        data-target="members-category-{{\Illuminate\Support\Str::slug($category)}}">
                                        {{$category}}</button>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                        <p>{{__('db.pages.our-team.tap_cards_message')}}</p>
                    </header>
                    <div class="ourTeam-wrapper js-our-team-target">
                        @foreach($categories as $category => $members)
                            @foreach($members as $member)
                            <a href="{{route('team-member',['slug'=>$member->slug])}}" class="authorSnippet members-category-{{\Illuminate\Support\Str::slug($category)}} @if($category ===
                            array_keys($categories)[0]){{'is-active'}}@endif">
                                <figure class="authorSnippet-item">
                                    <img src="{!! \App\Helpers\CDNHelper::show($member->image(),'250x250') !!}"
                                        alt="authorsName">
                                    <figcaption class="authorSnippet-details">
                                        <h2 class="authorSnippet-title">{{$member->name}}</h2>
                                        <h3 class="authorSnippet-position">{{$member->jobRole}}</h3>
                                    </figcaption>
                                </figure>
                            </a>
                            @endforeach
                        @endforeach
                    </div>
                </article>
            </div>
        </div>
    </div>
</main>
@endsection
@push('scripts')
<script src="{{ProjectHelper::asset('js/our-team.js').'?t='.$_SERVER['deployment_date']}}"></script>
@endpush
