
# co-nedb

  Nedb made more awesome with generators.

## Installation

```
$ npm install co-nedb
```

## Setup

  Call `wrap()` on collections to make them generator friendly:

```js
var Datastore = require('nedb');
var wrap = require('co-nedb');

var db = new Datastore({ autoload: true }); // in-memory database
var users = wrap(db);
```

## Example

  Simple example:

```js
yield users.remove({});

yield users.insert({ name: 'Tobi', species: 'ferret' });
yield users.insert({ name: 'Loki', species: 'ferret' });
yield users.insert({ name: 'Jane', species: 'ferret' });

var res = yield users.findOne({ name: 'Tobi' });
res.name.should.equal('Tobi');

var res = yield users.find({ species: 'ferret' });
res.should.have.length(3);
```

  Parallel inserts:

```js
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
```

# License

  MIT