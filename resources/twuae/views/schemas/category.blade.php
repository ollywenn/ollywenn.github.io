@if(!empty($latest_articles))
    <script type="application/ld+json">
    {
      "@context":"https://schema.org",
      "@type":"ItemList",
      "itemListElement":[
        @foreach($latest_articles as $featured)
            {
              "@type":"ListItem",
              "name":"{{$featured->headline}}",
              "position":{{$loop->index + 1}},
              "url":"{{url($featured->slug)}}"
            }@if(!$loop->last){{','}}@endif
        @endforeach
        ]
    }
    </script>
@endif
