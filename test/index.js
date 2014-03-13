
/**
 * Module dependencies.
 */

var Datastore = require('nedb');
var wrap = require('..');
var co = require('co');
var db = new Datastore({ autoload: true }); // in-memory database

var users = wrap(db);

describe('queries', function(){
  it('should work', function(done){
    co(function *(){
      yield users.remove({});

      yield [
        users.insert({ name: 'Tobi', species: 'ferret' }),
        users.insert({ name: 'Loki', species: 'ferret' }),
        users.insert({ name: 'Jane', species: 'ferret' })
      ];

      var res = yield users.findOne({ name: 'Tobi' });
      res.name.should.equal('Tobi');

      var res = yield users.find({ species: 'ferret' });
      res.should.have.length(3);

    })(done);
  })
})