{!! '<?xml version="1.0" encoding="UTF-8"?>' !!}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    @foreach ($entries as $entry)
        <?php
        $link = $entry->link;
        if (substr($link, 0, 1) == '/') {
            $link = substr($link, 1);
        }
        if (strpos($link, 'http') === false) {
            $tmp = explode('/', $link);
            $last = urlencode(array_pop($tmp));
            $tmp[] = $last;
            $link = implode('/', $tmp);

            $link = 'https://' . $host . '/' . $link;
        }
        ?>
        <url>
            <loc>{{$link}}</loc>
            <priority>{{$entry->priority}}</priority>
            <lastmod>{{str_replace(' ', 'T', $entry->created_at)}}+00:00</lastmod>
        </url>
    @endforeach
</urlset>
