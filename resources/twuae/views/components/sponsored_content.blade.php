@if(isset($sponsorContent) && is_array($sponsorContent) && array_key_exists('sponsoredContent',$sponsorContent))
    <section class="section section--sponsoredContent sidebar-widget">
        <header class="sidebarWidget-header sidebarWidget-header--doubleTitle">
            <h3 class="sidebarWidget-supraTitle">{{ __('db.block.title.sponsored') }}</h3>
            <h4 class="sidebarWidget-title">{{$sponsorContent['sponsoredContent']['title'] ?? __('db.block.title.partner-content') }}</h4>
        </header>
        <div class="sidebarWidget-content">
            <div class="articleSnippet-list">
                @foreach($sponsorContent['sponsoredContent']['entries'] as $item)
                    @if(!empty($item['link']))
                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="#" class="articleSnippet-thumb"
                               data-url="{!! \App\Helpers\CDNHelper::show($item['image'],'160x160')!!}"
                               style="background-image: url('{!! \App\Helpers\CDNHelper::show($item['image'],'160x160')!!}');"></a>
                            <div class="articleSnippet-content">
                                <h4 class="articleSnippet-title"><a href="#">{{$item['title']}}</a></h4>
                            </div>
                        </article>
                    @endif
                @endforeach
            </div>
        </div>
</section>
@endif
