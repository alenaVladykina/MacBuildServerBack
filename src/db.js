const Datastore = require('@seald-io/nedb');


const db = {};

db.users = new Datastore({ filename: 'db/users.db' });
db.tasks = new Datastore({ filename: 'db/tasks.db' });
db.taskHistory = new Datastore({ filename: 'db/task-history.db' });

db.users.loadDatabaseAsync();
db.tasks.loadDatabaseAsync();
db.taskHistory.loadDatabaseAsync();

module.exports = db;


//db.insertAsync({ hello: [1,2,3], bofo: [5,6,7] });

/*db.updateAsync({ _id: 'dWk6OU9WMgxqGMBY' }, { $push: { fruits: 'banana' } }, {}).then((e) => {
  log(">", e);
});*/

/*
db.findAsync({  _id: 'dWk6OU9WMgxqGMBY' }).then((e) => {
  log(">", e);
});*/
