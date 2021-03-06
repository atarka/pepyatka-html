define(["app/app",
        "ember"], function(App, Ember) {
  App.TimelineAdapter = DS.RESTAdapter.extend({
    buildURL: function(type, id) {
      var adapter = App.ApplicationAdapter.create()
      var url = []
      var host = adapter.host
      var prefix = adapter.urlPrefix()

      if (type) { url.push(adapter.pathForType(type)) }

      //We might get passed in an array of ids from findMany
      //in which case we don't want to modify the url, as the
      //ids will be passed in through a query param
      if (id && !Ember.isArray(id)) { url.push(id) }

      if (prefix) { url.unshift(prefix) }

      url = url.join('/')
      if (!host && url) { url = '/' + url }

      return url
    }
  })
})

