// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var toUpdate = {
  _id: new ObjectID('5a722aa42fe97edc05066dbd')
};

var toSet = {
  $set: {
    name: 'Kevin'
  },
  $inc: {
    age: 1
  }
};

var setOptions = {
  returnOriginal: false
}

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  db.collection('Users').findOneAndUpdate(toUpdate, toSet, setOptions).then((result) => {
    console.log(result);
  });

  // db.close();
});
