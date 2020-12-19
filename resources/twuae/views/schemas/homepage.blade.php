@if(is_array($latest) & !empty($latest))
    <script type="application/ld+json">
    {
      "@context":"https://schema.org",
      "@type":"ItemList",
      "itemListElement":[
        @foreach($latest as $index => $entry)
            {
              "@type":"ListItem",
              "name":"{{$entry['title']}}",
              "position":{{$loop->index + 1}},
              "url":"{{$entry['link']}}"
            }@if(!$loop->last){{','}}@endif
        @endforeach
        ]
    }
    </script>
@endif
