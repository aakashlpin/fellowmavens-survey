define(['marionette', 'templates'], function(Marionette, templates) {
  return Marionette.Layout.extend({
    template: templates.surveyParent,
    events: {
      'keypress #what': 'actionOnKeypressInWhat'
    },
    onShow: function() {
/*      this.collection.fetch({
        success: function(data) {
          console.log(data);
        }
      });*/
    },
    actionOnKeypressInWhat: function(e) {
      if (e.which == 13) {
        console.log('enter')
      }
    }
  })
});