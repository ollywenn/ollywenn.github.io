<section class="section section--latestFeatures sidebar-widget">
    <header class="sidebarWidget-header sidebarWidget-header--doubleTitle">
        <h3 class="sidebarWidget-supraTitle">Destinations</h3>
        <h4 class="sidebarWidget-title">Latest Features</h4>
    </header>
    <div class="sidebarWidget-content">
        <div class="articleSnippet-list">
            @for($i = 0; $i < 5; $i++)
                <article class="articleSnippet-item" itemscope itemtype="http://schema.org/BlogPosting">
                    <a href="#" class="articleSnippet-thumb">
                        <img src="https://via.placeholder.com/160x160?text=160x160" alt="{{-- TODO:--}}">
                    </a>
                    <div class="articleSnippet-content">
                        <h4 class="articleSnippet-title"><a href="#">How to spend 48 hours in Tel Aviv, Israel’s second city</a></h4>
                    </div>
                </article>
            @endfor
        </div>
    </div>
</section>
