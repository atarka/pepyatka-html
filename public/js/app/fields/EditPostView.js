define(["app/app", "ember"], function(App, Ember) {
  "use strict";

  App.EditPostView = Ember.TextArea.extend({
    classNames: ['editarea'],
    valueBinding: 'parentView.controller.body'
  })
})
