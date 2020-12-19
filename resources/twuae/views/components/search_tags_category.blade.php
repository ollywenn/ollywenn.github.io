@php($found = 0)
<section class="qs-content-wrapper">
    @if(ArrayHelper::checkIfIs($searchData,'categories','array') && count($searchData['categories'])>0)
        <section class="qs-tags-holder">
                <h3>categories</h3>
                <div class="qs-categories" style="">
                    @foreach($searchData['categories'] as $category)
                        @php($found++)
                        <a href="{{$category->url}}"
                           class="button">@if(!is_null($category->parentCategory)){{$category->parentCategory.' /
                    '}}@endif{{$category->label}}</a>
                    @endforeach
                </div>
        </section>
    @endif
        <section class="qs-tags-holder">
            @if(ArrayHelper::checkIfIs($searchData,'tags','array'))
                <h3>tags</h3>
                <div class="tags-holder">
                    @foreach($searchData['tags'] as $index => $tag)
                        @php($found++)
                        <a href="{{route('tag',['slug'=>$tag->slug])}}"
                           class=" @if($index == 0){{'active'}}@endif ">{!! $tag->label !!}</a>
                        @if($index < sizeof($searchData['tags']) - 1){{', '}}@else{{'.'}}@endif
                    @endforeach
                </div>
            @endif
        </section>
</section>

@if($found == 0)
    <p>Nothing matched your search criteria</p>
@endif
