@extends('layouts.template')
@section('body-class', 'page--static-page')
@push('styles')
    <link rel="stylesheet" href="{{ProjectHelper::asset('css/page-static.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', $page->title)

@section('content')
    <main>
        <div class="main-segment">
            <div class="wrapper">
                <div class="main-content">
                    <article class="article">
                        <header class="article-header">
                            <h1 class="article-title">{{ $page->title }}</h1>
                            <div class="article-metadata">
                                {{-- TODO: last updated should only show for the legal pages, as far as the first round approved of designs go--}}
                                <div class="article-lastUpdated">
                                    <p>Last updated: <span class="article-lastUpdatedDate">{{$page->lastUpdated()}}</span>
                                    </p>
                                </div>
                            </div>
                        </header>
                        <div class="article-body">
                            {!! $page->body !!}
                        </div>
                        @if(!empty($page->files()))
                            <div class="component--files">
                                @foreach($page->files() as $file)
                                    <a href="{{route('static_page-download',['slug'=>$page->slug,'file'=>$file->generateTmpFilename()])}}" target="_blank">
                                        @if(!empty($file->title) || !empty($file->description))
                                            @if(!empty($file->title))
                                                <h3>
                                                    {{$file->title}}
                                                </h3>
                                            @endif
                                            @if(!empty($file->description))
                                                {!! $file->description !!}
                                            @endif
                                        @endif
                                        <button class="btn--submit">{{__('db.pages.static_page.download')}}</button>
                                    </a>
                                @endforeach
                            </div>
                        @endif
                        @if($page->form !== null)
                            <div class="component--form">
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

                                @if((session('success') || $page->form()->canDownloadFile) &&
                                $page->form()->completionDownloadFile !== null)
                                    <a class="btn--primary" href="{{route('download-file',['slug' => $page->form()->slug])}}"
                                       target="_blank" rel="noopener noreferrer">
                                        {{-- I don't know if it's going to be an icon or what, so I leave it as plain text --}}
                                        Download file
                                    </a>
                                @endif

                                @if($page->form()->description !== null)
                                    {!! $page->form()->description !!}
                                @endif
                                <form class="form" method="post"
                                      action="{{route('submit-form',['slug' => $page->form()->slug])}}"
                                      enctype="multipart/form-data">
                                    <div class="form-items">
                                        @foreach($page->form()->fields() as $field)
                                            <div class="form-field">
                                                @include('components.form_field_'.strtolower($field->fieldType))
                                                @if ($errors->any())
                                                    @foreach($errors->get(\Illuminate\Support\Str::slug($field->displayName)) as
                                                    $message)
                                                        <div class="alert alert-danger">{{ $message }}</div>
                                                    @endforeach
                                                @endif
                                            </div>
                                        @endforeach
                                    </div>
                                    <button class="btn btn--submit" type="submit" value="Submit">Submit</button>
                                </form>
                            </div>
                        @endif
                    </article>
                </div>
            </div>
        </div>
    </main>
@endsection
