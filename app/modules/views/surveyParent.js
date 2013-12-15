define(['marionette', 'templates', 'jquery-toggles'], function(Marionette, templates) {
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

      $('.toggle').toggles({
        drag: true, // can the toggle be dragged
        click: true, // can it be clicked to toggle
        text: {
          on: 'Free', // text for the ON position
          off: 'Money' // and off
        },
        on: true, // is the toggle ON on init
        animate: 250, // animation time
        transition: 'ease-in-out', // animation transition,
        checkbox: $('#s_cooking'), // the checkbox to toggle (for use in forms)
        clicker: null, // element that can be clicked on to toggle. removes binding from the toggle itself (use nesting)
        width: 70, // width used if not set in css
        height: 30, // height if not set in css
        type: 'select' // if this is set to 'select' then the select style toggle will be used
      });
    },
    actionOnKeypressInWhat: function(e) {
      if (e.which == 13) {
        console.log('enter')
      }
    }
  })
});