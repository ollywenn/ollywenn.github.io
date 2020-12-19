{!! '<?xml version="1.0" encoding="UTF-8"?>' !!}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
    @foreach($articles as $article)
    <url>
        <loc>https://{{$project['url_production'].$article->slug}}</loc>
        <news:news>
            <news:publication>
                <news:name>The Caterer.com</news:name>
                <news:language>en</news:language>
            </news:publication>
            <news:publication_date>{{gmdate('c', strtotime($article->goLiveDate))}}</news:publication_date>
            <news:title>{{htmlspecialchars($article->headline, ENT_QUOTES | ENT_IGNORE, "UTF-8")}}</news:title>
            <news:keywords>@if(property_exists($article, 'keywords')){{htmlspecialchars($article->keywords, ENT_QUOTES | ENT_IGNORE,"UTF-8")}}@endif</news:keywords>
        </news:news>
    </url>
    @endforeach
</urlset>
