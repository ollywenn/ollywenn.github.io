{!! '<?xml version="1.0" encoding="UTF-8"?>' !!}
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    @foreach($files as $file)
        @if(array_key_exists($file, $sitemapContent))
            <sitemap>
                <loc>https://{{$host}}/sitemap/{{$projectCode.'_'.$file}}.xml</loc>
                <lastmod>{{date('Y-m-d').'T'.date('H:i:s')}}+00:00</lastmod>
            </sitemap>
        @endif
    @endforeach
</sitemapindex>
