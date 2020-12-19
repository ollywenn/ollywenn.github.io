@php($schemas = ['NewsArticle','Article'])
@foreach($schemas as $schema)
<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "{{$schema}}",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "{{url($article->url)}}"
        },
        "headline": "{{\Illuminate\Support\Str::words($article->title,15)}}",
        "description": "{{$metaDescription}}",
        "image": [
            "{{CDNHelper::show($metaImage,'1280x720',['format'=>'jpg','quality'=>55])}}",
            "{{CDNHelper::show($metaImage,'1280x960',['format'=>'jpg','quality'=>55])}}",
            "{{CDNHelper::show($metaImage,'1280x1280',['format'=>'jpg','quality'=>55])}}"
        ],
        "author": {
            "@type": "{{empty($authorName) ? 'Organization' : 'Person'}}",
            "name": "{{empty($authorName) ? 'Travel Weekly' : $authorName}}"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Travel Weekly",
            "logo": {
                "@type": "ImageObject",
                "url": "{{url('/tc/img/favicon/apple-touch-icon-60x60.png')}}",
                "width": 60,
                "height": 60
            }
        },
        @if($article->isLocked())
        "isAccessibleForFree": "False",
        "hasPart":
        {
            "@type": "WebPageElement",
            "isAccessibleForFree": "False",
            "cssSelector" : ".paywall"
        },
        @endif
        "datePublished": "{{$published}}",
        "dateModified": "{{$modified}}"
    }
</script>
@endforeach
