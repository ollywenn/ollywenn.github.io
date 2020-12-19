<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Travel Weekly",
        "item": "https://{{request()->getHttpHost()}}"
      }@if(!empty($breadcrumb)){{','}}@endif
      @php($count = 2)
      @foreach($breadcrumb as $name => $url)
      {
        "@type": "ListItem",
        "position": {{$count}},
        "name": "{{$name}}",
        "item": "{{$url}}"
      }@if(!$loop->last){{','}}@endif
      @php($count += 1)
      @endforeach
      ]
    }
</script>
