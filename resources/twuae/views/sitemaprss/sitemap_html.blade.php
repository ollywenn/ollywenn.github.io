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
                <header class="title">
                    <h1 class="static-page-title">{{ucwords(str_replace(['Article___','-','__','Sitemap'],['',' ',' > ',''], $file))}}
                        Sitemap</h1>

                    <a href="/sitemap.html" class="btn btn--cta-trigger">Back to the root sitemap</a>
                </header>
                <section class="static-page-content">
                    <ul>
                        @foreach ($entries as $entry)
                            <?php
                            $link = $entry->link;
                            if (substr($link, 0, 1) == '/') {
                                $link = substr($link, 1);
                            }
                            if (strpos($link, 'http') === false) {
                                $tmp = explode('/', $link);
                                $last = urlencode(array_pop($tmp));
                                $tmp[] = $last;
                                $link = implode('/', $tmp);

                                $link = 'https://' . $host . '/' . $link;
                            }
                            $link = str_replace('___', '__', $link);
                            ?>
                            <li>
                                <a href="{{strtolower($link)}}">{{$entry->title}}</a>
                            </li>
                        @endforeach
                    </ul>
                </section>
            </article>
        </main>
    </div>
@endsection
