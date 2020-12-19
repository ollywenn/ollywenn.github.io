@if(isset($partnerContent) && is_array($partnerContent) && array_key_exists('partnerContent',$partnerContent))
    <section class="section section--sponsoredContent sidebar-widget">
        <header class="sidebarWidget-header sidebarWidget-header--doubleTitle">
            <h3 class="sidebarWidget-supraTitle">{{ __('db.block.title.sponsored') }}</h3>
            <h4 class="sidebarWidget-title">{{$partnerContent['partnerContent']['title'] ?? __('db.block.title.partner-content') }}</h4>
        </header>
        <div class="sidebarWidget-content">
            <div class="articleSnippet-list">
                @foreach($partnerContent['partnerContent']['entries'] as $item)
                    @if(!empty($item['link']))
                        <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                            <a href="#" class="articleSnippet-thumb">
                               <img src="{!! \App\Helpers\CDNHelper::show($item['image'],'160x160')!!}" alt="{{-- TODO:--}}"></a>
                            <div class="articleSnippet-content">
                                <h4 class="articleSnippet-title"><a href="#">{{$item['title']}}</a></h4>
                            </div>
                        </article>
                    @endif
                @endforeach
                {{-- FIXME: remove these 2 once 4 elements are being rendered --}}
                <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                    <a href="#" class="articleSnippet-thumb">
                        <img src="https://media.graphcms.com/resize=w:160,h:160,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/a5KOGssnQEqJfiEZfMOF" alt=""></a>
                    <div class="articleSnippet-content">
                        <h4 class="articleSnippet-title"><a href="#">Jet2holidays increases Atol licence by almost one million seats</a></h4>
                    </div>
                </article>
                <article class="articleSnippet-item" itemscope="" itemtype="http://schema.org/BlogPosting">
                    <a href="#" class="articleSnippet-thumb">
                        <img src="https://media.graphcms.com/resize=w:160,h:160,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/a5KOGssnQEqJfiEZfMOF" alt=""></a>
                    <div class="articleSnippet-content">
                        <h4 class="articleSnippet-title"><a href="#">Jet2holidays increases Atol licence by almost one million seats</a></h4>
                    </div>
                </article>
            </div>
        </div>
    </section>
@endif
