@push('scripts')
    <script src="{{ProjectHelper::asset('js/hub_banner_parallax.js'.'?t='.$_SERVER['deployment_date'])}}"></script>
@endpush
@if($hub->bannerImage !== null || $hub->bannerVideo !== null)
    <div class="jarallax" @if($hub->bannerVideo !== null){{'data-jarallax-video="'.$hub->bannerVideo.'"'}}@else{!! 'style="background-image: url(\''.$hub->bannerImage.'\');"' !!}@endif >
        <h1>{{$hub->title}}</h1>
    </div>
@endif
