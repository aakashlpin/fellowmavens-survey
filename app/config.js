// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
  paths: {
    // Make folders easier to access.
    "vendor": "../vendor",
    "views": "./modules/views",
    "models": "./modules/models",
    "collections": "./modules/collections",

    // Almond is used to lighten the output filesize.
    "almond": "../vendor/bower/almond/almond",

    // Opt for Lo-Dash Underscore compatibility build over Underscore.
    "underscore": "../vendor/bower/lodash/dist/lodash.underscore",

    //templates
    "templates": "templates",

    // Map remaining vendor dependencies.
    "jquery": "../vendor/bower/jquery/jquery",
    "backbone": "../vendor/bower/backbone/backbone",
    "backbone.babysitter": '../vendor/bower/marionette/public/javascripts/backbone.babysitter',
    "backbone.wreqr": '../vendor/bower/marionette/public/javascripts/backbone.wreqr',
    "marionette": "../vendor/bower/marionette/lib/core/amd/backbone.marionette.min",
    "tpl": "../vendor/bower/tpl/tpl"
  },

  shim: {
    // This is required to ensure Backbone works as expected within the AMD
    // environment.
    "backbone": {
      // These are the two hard dependencies that will be loaded first.
      deps: ["jquery", "underscore"],

      // This maps the global `Backbone` object to `require("backbone")`.
      exports: "Backbone"
    },
    "backbone.babysitter": {
      deps: ["backbone"]

    },
    "backbone.wreqr": {
      deps: ["backbone"]

    }
  }
});
