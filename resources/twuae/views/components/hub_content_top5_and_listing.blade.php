@if(array_key_exists(0,$hub->sectionsData()))
    <div>
        {{-- Top 5 --}}
        @foreach($hub->sectionsData()[0]->content() as $index => $page)
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
@endif
{{-- Listing --}}
@foreach($hub->sectionsData() as $index => $section)
    @if($index > 0)
        @foreach($section->content() as $index => $page)
            <article itemscope itemtype="http://schema.org/BlogPosting">
                <a href="{{url($page->full_slug)}}" class="articleSnippet-thumb">

                    <img alt="{{$page->headline}}"
                         src="{!! \App\Helpers\CDNHelper::show($page->thumbnail,'300x160')!!}">
                    <span class="articleSnippet-category">{{$index + 1}}</span>
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
    @endif
@endforeach
