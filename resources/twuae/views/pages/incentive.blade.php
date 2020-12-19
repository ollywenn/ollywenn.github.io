@extends('layouts.template')
@section('body-class', 'page--incentive-single')
@push('styles')
    <link rel="stylesheet"
          href="{{ProjectHelper::asset('css/page-incentive-single.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', $incentive->title)

@section('content')

    <main>
        <div class="main-segment">
            <div class="wrapper">
                <div class="main-content">
                    <article class="article">
                        <header class="article-header">
                            <h1 class="article-title">{{$incentive->title}}</h1>
                            <div class="article-hero">
                                <img src="{{\App\Helpers\CDNHelper::show($incentive->thumbnail(),'1250x657')}}" alt="{{-- TODO:--}}">
                            </div>
                            <div class="article-metadata">
                                <div class="article-byline">
                                    @if(!empty($incentive->author_data))
                                    <address class="article-author">
                                        @foreach($incentive->author_data as $index => $author)
                                            @if(!empty($author->full_name))
                                                @if($index > 0){{' '.__('db.page.article.and').' '}}@else{{__('db.page.article.by_author').' '}}@endif
                                                <a href="{{route('show-author',['slug'=>$author->slug])}}"
                                                    class="article-authorsPermalink">{{$author->full_name}}</a>
                                            @endif
                                        @endforeach
                                    </address>
                                    |
                                    @endif
                                    <time class="article-date"
                                        datetime="{{date('Y-m-d',strtotime($incentive->publishedDate))}}"
                                        title="{{date('d F Y',strtotime($incentive->publishedDate))}}">{{date('d F Y, H:i',strtotime($incentive->publishedDate))}}</time>
                                </div>
                                <div class="article-share">
                                    @include('components.sharing_widget',[
                                    'text' => $incentive->title.' '.$incentive->full_slug,
                                    'title' => $incentive->title,
                                    ])
                                </div>
                            </div>
                        </header>
                        <div class="article-body">
                            {!! $incentive->description !!}
                            @if($incentive->form !== null)
                                @if (session('success'))
                                    @if(session('success') !== true)
                                    <div class="alert-success">
                                        {!! session('success') !!}
                                    </div>
                                    @endif
                                    @if(!empty($incentive->form()) && !empty($incentive->form()->files()))
                                    <div class="component--files">
                                        @foreach($incentive->form()->files() as $file)
                                            <a href="{{route('file-download',['slug'=>$incentive->form()->slug,'file'=>$file->generateTmpFilename()])}}"
                                                target="_blank" rel="noopener noreferrer">{{__('db.pages.static_page.download')}}</a>
                                        @endforeach
                                    </div>
                                    @endif
                                @endif
                                @if(!empty($incentive->form()) && !empty($incentive->form()->files()) && $incentive->form()->canDownloadFile === '1')
                                <div class="component--files">
                                    @foreach($incentive->form()->files() as $file)
                                        <a href="{{route('file-download',['slug'=>$incentive->form()->slug,'file'=>$file->generateTmpFilename()])}}"
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
                                @if(!empty($incentive->form()))
                                    <form name="contactForm" action="{{route('submit-form',['slug' => $incentive->form()->slug])}}" method="post" class="form" enctype="multipart/form-data">
                                        <div class="form-content">
                                            @if($incentive->form()->description !== null)
                                            {!! $incentive->form()->description !!}
                                            @endif
                                        </div>
                                        @foreach($incentive->form()->fields() as $field)
                                            @include('components.form_field_'.strtolower($field->fieldType))
                                            @if ($errors->any())
                                                @foreach($errors->get(\Illuminate\Support\Str::slug($field->displayName)) as $message)
                                                <small class="form-helperText form-helperText--error" data-error="" data-success="">{{ $message }}</small>
                                                @endforeach
                                            @endif
                                        @endforeach
                                        <button type="submit" class="btn--submit btn--large btn--square">{{__('db.page.contact.button.submit')}}</button>
                                    </form>
                                @endif
                            @endif
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </main>
@endsection
