<ul class="sharingWidget">
    <li><a class="sharingWidget-link sharingWidget-link--fb" href="https://facebook.com/sharer/sharer.php?u={{$url ?? request()->url()}}"
            target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">Share on
            Facebook</a>
    </li>
    <li><a class="sharingWidget-link sharingWidget-link--ln"
            href="https://www.linkedin.com/shareArticle?mini=true&url={{urlencode($url ?? request()->url())}}&title={{$title ?? ''}}&summary=articleSnippet&source={{request()->getBaseUrl()}}"
            target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">Share on LinkedIn</a>
    </li>
    <li><a class="sharingWidget-link sharingWidget-link--tt"
            href="https://twitter.com/intent/tweet/?text={{$title ?? ''}}&url={{$url ?? request()->url()}}" target="_blank"
            rel="noopener noreferrer" aria-label="Share on Twitter">Share on Twitter</a></li>
    @if($viewScreen === 'mobile')
    <li><a class="sharingWidget-link sharingWidget-link--wa" href="whatsapp://send?text={{$text ?? ''}}"
            data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer"
            aria-label="Share on WhatsApp">Share on WhatsApp</a></li>
    @endif
    <li><a class="sharingWidget-link sharingWidget-link--email" href="mailto:?body={{$text ?? ''}}&subject={{$title ?? ''}}"
            target="_self" rel="noopener noreferrer" aria-label="Share by email">Share by email</a>
    </li>
    @if(\Illuminate\Support\Facades\Auth::check())
        {{-- @todo: @gledsley - the request should be a POST to the data-save-url attribute, with the following body: --}}
        {{-- @todo: data-url = article full_slug --}}
        {{-- @todo: data-action = [save, remove] save or remove from saved --}}
        {{-- @todo:             {'article': '/article/url/here', 'action':'save'} --}}
        <li>
            <button class="sharingWidget-link sharingWidget-link--bookmark js-btn-save-article"
                    aria-label="Bookmark article" data-save-url="{{route('save-article')}}" data-url="{{$article->full_slug}}"
                    data-action="{{$article->ios_saved ? 'remove' : 'save'}}">{{__('db.share.bookmark')}}
            </button>
        </li>
    @endif
</ul>
