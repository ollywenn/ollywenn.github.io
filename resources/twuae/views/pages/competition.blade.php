@extends('layouts.template')
@section('body-class', 'page--competition-single')
@push('styles')
<link rel="stylesheet"
    href="{{ProjectHelper::asset('css/page-competition-single.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', $competition->title)

@section('content')

<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        {{-- FIXME: @EzequielHPP please change the title and link to be dynamic --}}
                        <a href="/competitions" class="btn btn--back">Competitions</a>
                        <h1 class="article-title">{{ $competition->title }}</h1>
                        {{-- FIXME: render if flag present (should be probably on all list templates --}}
                        <a href="#" class="btn--partnerContent">Partner Content</a>
                        <div class="article-hero">
                            <img src="{{\App\Helpers\CDNHelper::show($competition->thumbnail(),'1900x500')}}" alt="{{-- TODO:--}}">
                        </div>
                        <div class="article-metadata">
                            <span class="articleSnippet-timestamp">
                                <time datetime="timestamp number here"
                                      itemprop="datePublished">July 29 2020, 12:52</time>
                            </span>
                            <div class="article-share">
                                @include('components.sharing_widget',[
                                'text' => $competition->title.' '.$competition->full_slug,
                                'title' => $competition->title,
                                ])
                            </div>
                        </div>
                    </header>
                    <div class="article-body">
                        {{--FIXME: all items are expected to have some sort of content --}}
                        {!! $competition->description !!}

                        @if($competition->form !== null)
                            @if (session('success'))
                                <div class="alert-success">
                                    {!! session('success') !!}
                                </div>
                            @endif
                        @if (session('errors'))
                            <div class="alert-error">
                                {!! session('errors') !!}
                            </div>
                        @endif

                        <form class="form" method="post"
                            action="{{route('submit-form',['slug' => $competition->form()->slug])}}"
                            enctype="multipart/form-data">
                            @if($competition->form()->description !== null)
                            {!! $competition->form()->description !!}
                            @endif

                            @foreach($competition->form()->fields() as $field)

                            @include('components.form_field_'.strtolower($field->fieldType))
                            @if ($errors->any())
                            @foreach($errors->get(\Illuminate\Support\Str::slug($field->displayName)) as $message)
                            <small class="form-helperText form-helperText--error" data-error=""
                                data-success="">{{ $message }}</small>
                            @endforeach
                            @endif

                            @endforeach
                            <button type="submit"
                                class="btn--submit btn--large btn--square">{{__('db.page.competition.button.submit')}}</button>
                        </form>
                        @endif
                        {{-- TODO: add a terms and conditions block here? Not sure, it shows on the new designs though --}}
                    </div>
                </article>
            </div>
            <aside class="sidebar">
                @include('components.sidebar_ad')
                @include('components.most_popular')
                @include('components.latest_jobs')
            </aside>
        </div>
    </div>
</main>
@endsection
