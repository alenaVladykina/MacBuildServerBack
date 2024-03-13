const Datastore = require('@seald-io/nedb');


const db = {};

db.users = new Datastore({ filename: 'db/users.db' });

db.users.loadDatabaseAsync();


module.exports = db;
