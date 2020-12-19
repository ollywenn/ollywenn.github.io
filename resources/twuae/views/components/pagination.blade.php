@if($pages>1)
    <div class="pagination">
        <ul class="pagination-links">
            <li><a href="?page={{$current-1 >= 1 ? $current-1 : 1}}" @if($current==1)class="is-disabled"@endif aria-label="Switch to the Previous page">«</a></li>
            <li><a href="?page=1" aria-label="Switch to next page" class="@if($current==1) is-active @endif">1</a></li>
            @if ($pages<=15)
                @for ($i = 2; $i < $pages; $i++)
                    <li><a href="?page={{$i}}" aria-label="Switch to page number {{$i}}">{{$i}}</a></li>
                @endfor
            @else
                @if($current<7)
                    @for ($i = 2; $i < 8 ; $i++)
                        <li>
                            <a href="?page={{$i}}" aria-label="Switch to page number {{$i}}" class="@if($current==$i) is-active @endif">{{$i}}</a>
                        </li>
                    @endfor
                    <li><span>...</span></li>
                @elseif ($current>=7 && $current<($pages-6))
                    <li><span>...</span></li>
                    @for ($i = $current-3; $i <$current+4 ; $i++)
                        <li>
                            <a href="?page={{$i}}" aria-label="Switch to page number {{$i}}"  class="@if($current==$i) is-active @endif">{{$i}}</a>
                        </li>
                    @endfor
                    <li><span>...</span></li>
                @else
                    <li><span>...</span></li>
                    @for ($i = $pages-7; $i <$pages-1 ; $i++)
                        <li>
                            <a href="?page={{$i}}" aria-label="Switch to page number {{$i}}"  class="@if($current==$i) is-active @endif">{{$i}}</a>
                        </li>
                    @endfor
                @endif
            @endif
            <li>
                <a href="?page={{$pages}}" aria-label="Switch to next page" class="@if($current==$pages) is-active @endif">{{$pages}}</a>
            </li>
            <li><a href="?page={{$current+1 <= $pages ? $current+1 : $pages}}" @if($current==$pages)class="is-disabled"@endif aria-label="Switch to next page">»</a></li>
        </ul>
    </div>
@endif
