<script type="application/ld+json">
{
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "{{$name}}",
    "url": "{{$author_url}}",
    "image": "",
@if(is_array($socials) && !empty($socials))
    "sameAs": [
        "{{implode('", "',$socials)}}"
    ],
@endif
@if(!empty($jobTitle))
    "jobTitle": "{{$jobTitle}}",
@endif
    "worksFor": {
      "@type": "Organization",
      "name": "Travel Weekly"
    }
  }
</script>
