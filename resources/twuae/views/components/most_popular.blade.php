<section class="section section--mostPopular sidebar-widget">
    <header class="sidebarWidget-header">
        <button class="btn btn--mostPop is-active js-btn-latest-articles"
            data-target="articleSnippet-list--mostPop">Most Popular</button>
        <button class="btn btn--latest js-btn-latest-articles" data-target="articleSnippet-list--latest">Latest</button>
    </header>
    <div class="sidebarWidget-content">
        <ol class="articleSnippet-list articleSnippet-list--mostPop is-active js-latest-articles-list">
            @foreach($popularArticles as $item)
            <li>
                <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                    <div class="articleSnippet-content">
                        <h4 class="articleSnippet-title"><a
                                href="{{url($item->article()->full_slug)}}">{{$item->article()->title}}</a></h4>
                    </div>
                </article>
            </li>
            @endforeach
        </ol>
        <ol class="articleSnippet-list articleSnippet-list--latest js-latest-articles-list">
            @foreach($latestArticles as $article)
            <li>
                <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                    <div class="articleSnippet-content">
                        <h4 class="articleSnippet-title"><a href="{{url($article->full_slug)}}">{{$article->title}}</a>
                        </h4>
                    </div>
                </article>
            </li>
            @endforeach
        </ol>
    </div>
</section>
@push('scripts')
<!-- TODO: possible candidates to be used on most popular widget
    <script src="{{ProjectHelper::asset('js/external/ResizeSensor.js'.'?t='.$_SERVER['deployment_date'])}}"></script>
    <script src="{{ProjectHelper::asset('js/external/ElementQueries.js'.'?t='.$_SERVER['deployment_date'])}}"></script>
-->
@endpush
