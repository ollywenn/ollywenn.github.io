@if(isset($breakingNews) && !empty($breakingNews) && $breakingNews !== 'no-breaking-news' && !empty($breakingNews->article()))
    <section class="section section--breaking-news">
        <a href="{{$breakingNews->article()->full_slug}}">
            <p>BREAKING NEWS!!</p>
            <p>{{$breakingNews->article()->title}}</p>
        </a>
    </section>
@endif
