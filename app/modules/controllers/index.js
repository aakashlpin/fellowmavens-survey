define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var IndexView = require('views/surveyParent');
  var IndexCollection = require('collections/surveys');
  var app = require('../../app');

  // Defining the application router.
  module.exports = {
    indexHandler: function() {
      console.log("Hi there! Do you find this concept interesting? " +
        "Moonlight with me on ideas, design and development. " +
        "Ping me at aakash.lpin@gmail.com");

      var indexCollection = new IndexCollection();
      var indexView = new IndexView({collection: indexCollection});
      app.ui.main.show(indexView.render());
    }
  };
});
