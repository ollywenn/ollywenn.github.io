@extends('layouts.template')
@section('body-class', 'page--simple-page')

@section('schema')
    @include('schemas.breadcrumb',['breadcrumb' => ['Sitemap'=>'']])
@endsection
@section('meta')
    <meta name="robots" content="noindex">
@endsection

@section('content')

    <div class="wrapper content-holder-main wrapper--heavy-content">
        <main>
            <article class="static-page">
                <section class="static-page-content">
                    <ul>
                        @foreach($sitemapFiles as $file)
                            @if (array_key_exists($file, $sitemapContent))
                                <li>
                                    <a href="https://{{$host}}/{{strtolower(str_replace('___','__',$projectCode.'_'.$file))}}_sitemap.html">
                                        {{ucwords(str_replace(['Article___','-','__'],['',' ',' > '], $file))}}
                                    </a>
                                </li>
                            @endif
                        @endforeach
                    </ul>
                </section>
            </article>
        </main>
    </div>
@endsection
