const configuration = {
    disqus_shortname: 'travelweeklyuk',
    disqus_identifier: document.getElementById('disqus_thread').getAttribute('data-disqus-identifier'),
    disqus_title: document.getElementById('disqus_thread').getAttribute('data-disqus-title'),
    disqus_url: document.getElementById('disqus_thread').getAttribute('data-disqus-url'),
    readyToBind: "@"
}

// ensure that the disqus_identifier and disqus_url are both set, otherwise we will run in to identifier conflicts when using URLs with "#" in them
// see http://help.disqus.com/customer/portal/articles/662547-why-are-the-same-comments-showing-up-on-multiple-pages-
if (typeof configuration.disqus_identifier === 'undefined' || typeof configuration.disqus_url === 'undefined') {
    throw "Please ensure that the `disqus-identifier` and `disqus-url` attributes are both set.";
}

// put the config variables into separate global vars so that the Disqus script can see them
window.disqus_shortname = configuration.disqus_shortname;
window.disqus_identifier = configuration.disqus_identifier;
window.disqus_title = configuration.disqus_title;
window.disqus_url = configuration.disqus_url;
window.disqus_config = function () {
    this.language = configuration.disqus_config_language;
    this.page.url = window.href;
};

(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://travelweeklyuk.disqus.com/embed.js';

    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();

