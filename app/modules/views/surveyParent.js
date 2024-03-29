define(function(require, exports, module) {

  var Marionette = require('marionette'),
    templates = require('templates'),
    Firebase = require('firebase'),
    FirebaseSimpleLogin = require('firebase-simple-login');

  require('jquery-toggles');

  module.exports = Marionette.Layout.extend({
    template: templates.surveyParent,
    events: {
      'keyup form input': 'actionOnKeyUpInFormInput',
      'submit #form_stepone': 'actionOnFormSubmit'
    },
    ui: {
      form: '#form_stepone',
      formInput: '#form_stepone input',
      formSubmitButton: '#form_stepone input[type="submit"]'
    },
    actionOnKeyUpInFormInput: function(e) {
      var empty = false,
        self = this;

      this.ui.formInput.each(function() {
        if ($(this).val() === '') {
          empty = true;
        }
      });

      if (empty) {
        self.ui.formSubmitButton.attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        self.ui.formSubmitButton.addClass('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
      } else {
        self.ui.formSubmitButton.removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        self.ui.formSubmitButton.removeClass('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
      }
    },
    actionOnFormSubmit: function(e) {
      e.preventDefault();
      var data = {
        email: this.ui.form.find('#email').val(),
        location: this.ui.form.find('#location').val(),
        sells: this.ui.form.find('#sells').val().split(',').map(function(sell) {return $.trim(sell);}),
        wants: this.ui.form.find('#wants').val().split(',').map(function(want) {return $.trim(want);}),
        time: this.ui.form.find('#time').val()
      };

      console.log(data);

    },
    getBackground: function() {
      var img = new Image();
      img.src = '/app/img/bg.jpg';
      img.onload = function() {
        $('.bgHolder')
          .prop({
            src: '/app/img/bg.jpg'
          })
          .addClass('bg')
          .fadeIn();
      };

    },
    onShow: function() {
      /*      this.collection.fetch({
       success: function(data) {
       console.log(data);
       }
       });*/
      this.getBackground();
      var firebaseRef = new Firebase('https://fellowmavens.firebaseio.com');
      var auth = new FirebaseSimpleLogin(firebaseRef, function(error, user) {
        if (error) {
          // an error occurred while attempting login
          alert(error);
        } else if (user) {
          // user authenticated with Firebase
          console.log(user);

          // Log out so we can log in again with a different provider.
          auth.logout();
        } else {
          // user is logged out
        }
      });

//      auth.login('facebook');

      /*      $('.toggle').toggles({
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
       });*/
    }
  });
});