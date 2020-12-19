<header class="mainHeader js-main-header">
    <div class="wrapper">
        <div class="mainLogo">
            <a href="/" class="logo logo--travelweekly-main">Travel Weekly - Travel Industry News and Travel Jobs
                from Travel Weekly</a>
        </div>
        <div class="header-auxiliaryNav">
            <button type="button" class="btn--search js-btn-search-toggle">Search</button>
            @if(\Illuminate\Support\Facades\Auth::guest())
            <button type="button" class="btn--profile js-btn-profile" aria-label="My account button">My
                Account
            </button>
            @else
            <a href="/profile" class="btn--profile js-btn-profile" aria-label="My account button">My
                Account
            </a>
            @endif


            <nav class="header-extraMenu js-extra-menu">
                <ul>
                    @if(\Illuminate\Support\Facades\Auth::guest())
                    <li>
                        <button class="extraMenu-login btn--login js-btn-login" aria-label="Log in button"
                            onclick="Popup.login()" data-popup-url="">Log in</button>
                    </li>
                    <li class="extraMenu--mainWrapper">
                        <button class="extraMenu-signup btn--signup js-btn-signup" aria-label="Register button"
                            onclick="Popup.signUp()">Register</button>
                    </li>
                    @else
                    <li>
                        <a href="/profile" class="btn extraMenu-myAccount btn--myAccount js-btn-my-account"
                           aria-label="My account button">My Account</a>
                    </li>
                        <li>
                            <button class="extraMenu-logout btn--logout js-btn-logout" aria-label="Log out button">Log
                                out
                            </button>
                        </li>
                    @endif
                </ul>
            </nav>
            <button class="btn btn--toggleNav js-btn-toggle-menu"
                    aria-label="{{__('db.buttons.menu-aria-label')}}">{{__('db.buttons.menu')}}</button>
        </div>
        <nav class="mainHeader-mainNav mainNav js-main-nav">
            <ul>
                @if(isset($navigation))
                    @foreach($navigation as $navItem)
                        <li class="@if(!empty($navItem['children'])){{'menuParentItem js-menu-parent'}}@endif
                        @if(request()->path() === $navItem['url'] || strpos(request()->path(), $navItem['url']) === 0){{'is-current'}}@endif ">
                            @if(empty($navItem['children']))
                                <a href="{{$navItem['url']}}">{{$navItem['label']}}</a>
                            @else
                                <!--TODO: needs is-current class -->
                                <button @if(request()->path() === $navItem['url'] || strpos(request()->path(), $navItem['url']) === 0){{'class=is-current'}}@endif>{{$navItem['label']}}</button>
                                <div class="subMenu js-sub-menu">
                                    <ul>
                                        <li @if(request()->path() === $navItem['url'])class="is-current"@endif >
                                            <!--TODO: needs is-current class -->
                                            <a href="@if(strpos($navItem['url'],'http') !== false){{$navItem['url']}}@else{{url($navItem['url'])}}@endif"
                                               @if($navItem['showLatest']) data-latest-url="{{md5($navItem['url'])}}" @endif
                                               data-hover-id="{{md5($navItem['url'])}}">{{__('db.navigation.all')}}</a>
                                            @if(!\App\Helpers\BrowserHelper::isCrawler() && !empty($navItem['articles']))
                                                <div class="subMenu-featuredArticles is-active">
                                                    <div id="{{md5($navItem['url'])}}"
                                                         class="subMenu-featuredArticlesHolder">
                                                        @foreach($navItem['articles'] as $article)
                                                            <article class="articleSnippet-item" itemscope=""
                                                                     itemtype="http://schema.org/BlogPosting">
                                                                <a href="{{$article['slug']}}"
                                                                   class="articleSnippet-thumb">
                                                                    <img alt="{{$article['headline']}}"
                                                                         src="{{$article['previewImage']}}">
                                                                </a>
                                                                <div class=" articleSnippet-content">
                                                                    <h3 class="articleSnippet-title">
                                                                        {{-- FIXME: truncate title to 60 characters (add ...) to avoid overflow --}}
                                                                        <a href="{{$article['slug']}}">{{$article['headline']}}</a>
                                                                    </h3>
                                                                </div>
                                                                <div class="articleSnippet-metaData">
                                                                    <span class="articleSnippet-timestamp">
                                                                        <time datetime="timestamp number here"
                                                                              itemprop="datePublished">{{$article['publishedDate']}}</time>
                                                                    </span>
                                                                </div>
                                                            </article>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            @endif
                                        </li>
                                        @foreach($navItem['children'] as $child)
                                            <li @if(request()->path() === $child['url'])class="is-current"@endif >
                                                <a href="@if(strpos($child['url'],'http') !== false){{$child['url']}}@else{{url($child['url'])}}@endif"
                                                   @if($child['showLatest']) data-latest-url="{{md5($child['url'])}}"
                                                        @endif>{{$child['label']}}</a>
                                                @if(!\App\Helpers\BrowserHelper::isCrawler() && !empty($child['articles']))
                                                    <div class="subMenu-featuredArticles">
                                                        <div id="{{md5($child['url'])}}"
                                                             class="subMenu-featuredArticlesHolder">
                                                            @foreach($child['articles'] as $article)
                                                                <article class="articleSnippet-item" itemscope=""
                                                                         itemtype="http://schema.org/BlogPosting">
                                                                    <a href="{{$article['slug']}}"
                                                                       class="articleSnippet-thumb">
                                                                        <img alt="{{$article['headline']}}"
                                                                             src="{{$article['previewImage']}}">
                                                                    </a>
                                                                    <div class="articleSnippet-content">
                                                                        <h3 class="articleSnippet-title">
                                                                            <a href="{{$article['slug']}}">{{$article['headline']}}</a>
                                                                        </h3>
                                                                    </div>
                                                                    <div class="articleSnippet-metaData">
                                                                            <span class="articleSnippet-timestamp">
                                                                                <time datetime="timestamp number here"
                                                                                      itemprop="datePublished">{{$article['publishedDate']}}</time>
                                                                            </span>
                                                                    </div>
                                                                </article>
                                                            @endforeach
                                                        </div>
                                                    </div>
                                                @endif
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                        </li>
                    @endforeach
                @endif
            </ul>
        </nav>
    </div>
</header>
