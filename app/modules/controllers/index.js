define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var IndexView = require('views/SurveyParent');
  var app = require('../../app');

  // Defining the application router.
  module.exports = {
    indexHandler: function() {
      console.log("Welcome to your / route.");
      var indexView = new IndexView();
      app.ui.main.show(indexView.render());
    }
  };
});
