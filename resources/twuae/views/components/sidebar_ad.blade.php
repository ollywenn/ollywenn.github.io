@if(isset($adBlocks) && array_key_exists('mpu',$adBlocks))
    <div class="sidebarAd">
        {!! str_replace('window.','',$adBlocks['mpu']) !!}
    </div>
@endif
