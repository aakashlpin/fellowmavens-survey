define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var IndexView = require('views/surveyParent');
  var IndexCollection = require('collections/surveys');
  var app = require('../../app');

  // Defining the application router.
  module.exports = {
    indexHandler: function() {
      console.log("Welcome to your / route.");
      var indexCollection = new IndexCollection();
      var indexView = new IndexView({collection: indexCollection});
      app.ui.main.show(indexView.render());
    }
  };
});
