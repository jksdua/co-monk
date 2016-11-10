
/**
 * Module dependencies.
 */

var thunkify = require('thunkify');

/**
 * Methods to wrap.
 */

var methods = [
  'update',
  'remove',
  'count',
  'find',
  'findOne',
  'insert',
  'ensureIndex',
  'loadDatabase'
];

/**
 * Wrap `db`.
 *
 * @param {Datastore} db
 * @return {Datastore}
 * @api public
 */

module.exports = function(db){
  methods.forEach(function(method){
    db[method] = thunkify(db[method]);
  });

  return db;
};
