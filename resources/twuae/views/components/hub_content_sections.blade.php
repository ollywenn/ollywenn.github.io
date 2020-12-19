@foreach($hub->sectionsData() as $section)
    <div>
        <h2>{{$section->title}}</h2>
        <div>
            @foreach($section->content() as $page)
                <article itemscope itemtype="http://schema.org/BlogPosting">
                    <a href="{{url($page->full_slug)}}" class="articleSnippet-thumb">

                        <img alt="{{$page->headline}}"
                             src="{!! \App\Helpers\CDNHelper::show($page->thumbnail,'300x160')!!}">
                        @if($page instanceof \App\Models\tw\Article)
                            <span class="articleSnippet-category">{{$page->categoryLabel}}</span>
                        @endif
                    </a>
                    <div class="articleSnippet-content">
                        <h3 class="articleSnippet-title"><a
                                    href="{{url($page->full_slug)}}">{{$page->headline}}</a>
                        </h3>

                        @if($page instanceof \App\Models\tw\Article)
                            <p>{{\Illuminate\Support\Str::limit($page->shortText, 100).' '}}</p>
                        @endif
                        <a href="{{url($page->full_slug)}}"
                           class="articleSnippet-readMore">{{__('db.articles.read-more')}}</a>
                    </div>
                </article>
            @endforeach
        </div>
    </div>
@endforeach
