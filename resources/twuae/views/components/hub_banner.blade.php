@if($hub->bannerVideo !== null)
    {!! \App\Helpers\VideoHelper::getVideoEmbedCode($hub->bannerVideo) !!}
@elseif($hub->bannerImage !== null)
    <img src="{{$hub->bannerImage}}">
@endif
<h1>{{$hub->title}}</h1>
