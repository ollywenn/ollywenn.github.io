{!! '<?xml version="1.0" encoding="UTF-8"?>' !!}
<rss version="2.0" xml:base="https://{{$project['url_production']}}" xmlns:atom="http://www.w3.org/2005/Atom"
>
    <channel>
        <title>The Caterer.com</title>
        <link>
        https://{{$project['url_production']}}</link>
        <description>The leading multimedia brand for the UK hospitality industry since 1878 with a market-leading print
            digital and events portfolio.
        </description>
        <atom:link rel="self" href="https://{{$project['url_production']}}/rss.xml"/>
        <language>en-gb</language>
        <managingEditor>chris.gamm@thecaterer.com (Chris Gamm)</managingEditor>
        <webMaster>web@jacobsmediagroup.com (JMG IT department)</webMaster>
        <docs>http://blogs.harvard.edu/tech/rss</docs>
        @foreach($articles as $article)
            <?php
            $date = new \DateTime($article->goLiveDate);
            $date = $date->format('D, d M Y H:i:s O');
            $title = str_replace('&', '&amp;', $article->headline);
            $desc = str_replace('&', '&amp;', $article->shortText);
            $articleLink = 'https://' . $project['url_production'] . $article->slug;
            ?>
            <item>
                <title>{!! $title !!}</title>
                <link>{{$articleLink}}</link>
                <description>
                    @if($fullHtml)
                        {!! '<![CDATA[' !!}
                        {!! $article->body !!}
                        @if($article->isLocked)
                            <div>
                                <a herf="{{$articleLink}}" target="_blank">
                                    Read more on The Caterer's Website
                                </a>
                            </div>
                        @endif
                        {!! ']]>' !!}
                    @else
                        {{htmlspecialchars($desc, ENT_QUOTES | ENT_IGNORE, "UTF-8")}}
                    @endif
                </description>
                <pubDate>{{$date}}</pubDate>
                <guid isPermaLink="true">https://{{$project['url_production'].$article->slug}}</guid>
                <source url="https://{{$project['url_production']}}/rss.xml">
                The Caterer</source>
                <enclosure
                    url="https://media.graphcms.com/resize=w:400,h:300,fit:crop,align:faces/output=f:jpg/quality=value:55/{{$article->imageHandle}}"
                    length="15000" type="image/jpeg"/>
            </item>
        @endforeach
    </channel>
</rss>
