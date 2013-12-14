define(['marionette', 'templates'], function(Marionette, templates) {
  return Marionette.Layout.extend({
    template: templates.surveyParent,
    onShow: function() {
      this.collection.fetch({
        success: function(data) {
          console.log(data);
        }
      });
    }
  })
});