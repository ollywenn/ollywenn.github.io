@extends('layouts.template')
@section('body-class', 'page--report-single')
@push('styles')
    <link rel="stylesheet"
          href="{{ProjectHelper::asset('css/page-report-single.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', $report->title)

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <header class="article-header">
                    {{-- FIXME: render the name of the main (sub)category --}}
                    <a href="/reports" class="btn btn--back">Reports</a>
                    {{-- FIXME: 👆🏻 --}}
                    <h1 class="article-title">{{$report->title}}</h1>
                    <div class="article-hero">
                        <img src="{{\App\Helpers\CDNHelper::show($report->thumbnail(),'1250x657')}}" alt="{{-- TODO:--}}">
                    </div>
                    <div class="article-metadata">
                        <div class="article-byline">
                            <time class="article-date"
                                datetime="{{date('Y-m-d',strtotime($report->publishedDate))}}"
                                title="{{date('d F Y',strtotime($report->publishedDate))}}">{{date('d F Y, H:i',strtotime($report->publishedDate))}}</time>
                        </div>
                        <div class="article-share">
                            @include('components.sharing_widget',[
                            'text' => $report->title.' '.$report->full_slug,
                            'title' => $report->title,
                            ])
                        </div>
                    </div>
                </header>
                <div class="article-body">
                    {!! $report->description !!}

                    @if($report->form !== null)
                        @if (session('success'))
                            @if(session('success') !== true)
                                <div class="alert-success">
                                    {!! session('success') !!}
                                </div>
                            @endif
                            @if(!empty($report->form()->files()))
                                <div class="component--files">
                                    @foreach($report->form()->files() as $file)
                                        <a href="{{route('file-download',['slug'=>$report->form()->slug,'file'=>$file->generateTmpFilename()])}}"
                                        target="_blank">
                                            <button class="btn--submit">{{__('db.pages.static_page.download')}}</button>
                                        </a>
                                    @endforeach
                                </div>
                            @endif
                        @endif
                        @if(!empty($report->form()->files()) && $report->form()->canDownloadFile === '1')
                            <div class="component--files">
                                @foreach($report->form()->files() as $file)
                                    <a href="{{route('file-download',['slug'=>$report->form()->slug,'file'=>$file->generateTmpFilename()])}}"
                                    target="_blank">
                                        <button class="btn--submit">{{__('db.pages.static_page.download')}}</button>
                                    </a>
                                @endforeach
                            </div>
                        @endif
                        @if (session('errors'))
                            <div class="alert-error">
                                {!! session('errors') !!}
                            </div>
                        @endif

                        <form class="form component--form" method="post" action="{{route('submit-form',['slug' => $report->form()->slug])}}" enctype="multipart/form-data">
                            @if($report->form()->description !== null)
                                {!! $report->form()->description !!}
                            @endif

                            @foreach($report->form()->fields() as $field)
                                @include('components.form_field_'.strtolower($field->fieldType))
                                @if ($errors->any())
                                    @foreach($errors->get(\Illuminate\Support\Str::slug($field->displayName)) as $message)
                                        <div class="alert alert-danger">{{ $message }}</div>
                                    @endforeach
                                @endif
                            @endforeach

                            <button class="btn--submit btn--large btn--square" type="submit" value="Submit">Submit</button>
                        </form>
                    @endif
                </div>
            </div>
        </div>
    </div>
</main>
@endsection
