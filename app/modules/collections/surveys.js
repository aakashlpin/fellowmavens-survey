define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  require('backbone-firebase');
  var Survey = require('../models/survey');

  return Backbone.Collection.extend({
    model: Survey,
    firebase: new Backbone.Firebase('https://fellowmavens.firebaseIO.com')
  });

});