// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var toDelete = {
  name: 'Kevin'
};

var deleteOne = {
  _id: new ObjectID('5a722a8c2fe97edc05066db0')
};

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  db.collection('Users').deleteMany(toDelete).then((result) => {
    console.log(result);
  });

  // deleteOne
  // db.collection('Todos').deleteOne(deleteOne).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Users').findOneAndDelete(deleteOne).then((result) => {
    console.log(result);
  });

  // db.close();
});
