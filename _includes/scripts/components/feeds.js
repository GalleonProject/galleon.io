(function() {
  var SOURCES = window.TEXT_VARIABLES.sources;
  window.Lazyload.js(SOURCES.jquery, function() {
    window.Lazyload.js(SOURCES.jquery_rss, function() {
      $(".jq-news-feeds").rss(
        "{{ site.news_feeds | default: site.data.variables.default.news_feeds }}",
        {
          limit: 4,
          ssl: true,
          layoutTemplate: "<ul>{entries}</ul>",
          entryTemplate: "<p><a href='{url}'>{title}</a></p>"
        }
      );
    });
  });
})();
