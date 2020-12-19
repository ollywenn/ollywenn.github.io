<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "{{$event->title}}",
      "startDate": "{{date(DATE_ISO8601, strtotime($event->startDate))}}",
      "endDate": "{{date(DATE_ISO8601, strtotime($event->endDate))}}",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "location": {
        "@type": "VirtualLocation",
        "url": "{{$event->url}}"
        },
      "image": [
        "{{CDNHelper::show($event->thumbnail(),'1280x720',['format'=>'jpg','quality'=>55])}}",
        "{{CDNHelper::show($event->thumbnail(),'1280x960',['format'=>'jpg','quality'=>55])}}",
        "{{CDNHelper::show($event->thumbnail(),'1280x1280',['format'=>'jpg','quality'=>55])}}"
       ],
      "description": "{{trim($event->description)}}"
    }

</script>
