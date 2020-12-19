<?php
$socials = [];
if (!is_null(config('app.config.facebook.handle'))) {
    $socials[] = config('app.config.facebook.handle');
}
if (!is_null(config('app.config.twitter.handle'))) {
    $socials[] = config('app.config.twitter.handle');
}
if (!is_null(config('app.config.linkedin.handle'))) {
    $socials[] = config('app.config.linkedin.handle');
}
if (!is_null(config('app.config.instagram.handle'))) {
    $socials[] = config('app.config.instagram.handle');
}
?>
<script type="application/ld+json">
{
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Travel Weekly",
    "url": "{{url('/')}}"@if(!empty($socials)),
    "sameAs": [
        "{!! implode('", "',$socials)!!}"
    ]@endif
  }

</script>
