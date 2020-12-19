@extends('layouts.template')
@section('body-class', 'page--media-single')

@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-article.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', $album->title)

@section('content')

<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        {{-- FIXME: render the name of the main category --}}
                        <a href="/media" class="btn btn--back">Photos & Videos</a>
                        {{-- FIXME: 👆🏻 --}}
                        <h1 class="article-title">Title here</h1>
                        {{-- FIXME: render if flag present (should be probably on all list templates --}}
                        <a href="#" class="btn--partnerContent">Partner Content</a>
                        <div class="article-hero">
                            <img src="https://media.graphcms.com/resize=w:1250,h:657,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/vjCq3qY5TYiitblNRVGY" alt="{{-- TODO:--}}">
                        </div>
                        <div class="article-metadata">
                            <div class="article-byline">
                                <time class="article-date"
                                    datetime="{{date('Y-m-d',strtotime($album->publishedDate))}}"
                                    title="{{date('d F Y',strtotime($album->publishedDate))}}">{{date('d F Y, H:i',strtotime($album->publishedDate))}}</time>
                            </div>
                            <div class="article-share">
                                @include('components.sharing_widget',[
                                'text' => '//TODO',
                                'title' => '//TODO',
                                ])
                            </div>
                        </div>
                    </header>
                    <div class="article-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam in odit nam magni beatae repellendus natus et ad? Perferendis maiores accusantium odio nobis odit explicabo minus consequatur ex voluptatum. Dolore!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eaque unde excepturi possimus provident error perferendis deleniti a cum omnis obcaecati, rem, incidunt placeat laboriosam corporis earum sunt. Obcaecati, temporibus?</p>

                        <div class="article-bodyMedia">
                            @foreach($album->media as $media)
                                @if($media->image !== null)
                                <img alt="{{$media->title}}"
                                    src="{!! \App\Helpers\CDNHelper::show($media->image()->url,'300x160')!!}">
                                @else
                                {!! VideoHelper::getVideoHandleAndType($media->video()->url, true)['embed'] !!}
                                @endif
                            @endforeach
                        </div>
                        {{-- TODO: move this block to foreach to show the image gallery--}}
                        {{-- TODO: hook up click and photo lightbox--}}
                        <div class="article-bodyMedia article-bodyMedia--photoAlbum">
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1509635776280-892e4447ff86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1065&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1552359702-206ece2f1e0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=564&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1542837351-ab91e0a84e03?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1564076171880-b106f043a225?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1560874977-7e415c036c65?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1564149697328-5b3fb7b3909b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1565474850336-f42816265fbf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1595053826311-1f57f2c8b9c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1598004004704-6e074f789461?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1600856160158-2996eeda9927?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=636&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1605815982976-dc9065456986?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1605816013720-82a589f4ee6e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1565263337323-264210c5df1c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1605815982976-dc9065456986?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80">
                            </article>
                            <article class="article-bodyMediaItem js-article-body-media-item">
                                <img src="https://images.unsplash.com/photo-1579841708317-2c622f5b4a5d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80">
                            </article>
                        </div>
                    </div>
                </article>

                    <section class="section section--relatedTopics">
                        <header class="section-header">
                            <h4 class="section-title">{{__('db.page.article.tags')}}</h4>
                        </header>
                        <ul class="relatedTopics-list">
                            <li class="relatedTopics-item"><a href="#">tag1</a></li>
                            <li class="relatedTopics-item"><a href="#">tag1</a></li>
                            <li class="relatedTopics-item"><a href="#">tag1</a></li>
                            <li class="relatedTopics-item"><a href="#">tag1</a></li>
                    </ul>
                </section>


                <section class="section section--relatedArticles">
                    <header class="section-header">
                        <h4 class="section-title">More Photos & Videos</h4>
                    </header>
                    <div class="articleSnippet-list">

                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="#" class="articleSnippet-thumb">
                                <img alt="{{-- TODO: --}}"
                                src="https://media.graphcms.com/cfBmnKCR0aOc4EziCvQA"></a>
                            <div class="articleSnippet-content">
                                <h4 class="articleSnippet-title"><a
                                        href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a>
                                </h4>
                                <ul class="article-mediaList">
                                    <li class="article-videoLength">2:50</li>
                                </ul>
                            </div>
                        </article>
                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="#" class="articleSnippet-thumb">
                                <img alt="{{-- TODO: --}}"
                                src="https://media.graphcms.com/cfBmnKCR0aOc4EziCvQA"></a>
                            <div class="articleSnippet-content">
                                <h4 class="articleSnippet-title"><a
                                        href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a>
                                </h4>
                                <ul class="article-mediaList">
                                    <li class="article-videoLength">2:50</li>
                                </ul>
                            </div>
                        </article>
                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="#" class="articleSnippet-thumb">
                                <img alt="{{-- TODO: --}}"
                                src="https://media.graphcms.com/cfBmnKCR0aOc4EziCvQA"></a>
                            <div class="articleSnippet-content">
                                <h4 class="articleSnippet-title"><a
                                        href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a>
                                </h4>
                                <ul class="article-mediaList">
                                    <li class="article-videoLength">2:50</li>
                                </ul>
                            </div>
                        </article>
                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="#" class="articleSnippet-thumb">
                                <img alt="{{-- TODO: --}}"
                                src="https://media.graphcms.com/cfBmnKCR0aOc4EziCvQA"></a>
                            <div class="articleSnippet-content">
                                <h4 class="articleSnippet-title"><a
                                        href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a>
                                </h4>
                                <ul class="article-mediaList">
                                    <li class="article-videoLength">2:50</li>
                                </ul>
                            </div>
                        </article>




                    </div>
                </section>

            </div>
        </div>
    </div>
</main>
@endsection
