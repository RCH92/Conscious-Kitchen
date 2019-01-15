var isUnique = function(modelName, field) {
    return function(value, next) {
      var Model = require("../models")[modelName];
      var query = {};
      query[field] = value;
      Model.find({where: query, attributes: ["id"]}).then(function(obj) {
        if (obj) {
          next(field + ' "' + value + '" is already in use');
        } else {
          next();
        }
      });
    };
  }
  module.exports = isUnique;