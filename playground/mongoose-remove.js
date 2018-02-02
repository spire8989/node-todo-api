const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a7440192fe97edc05068bee'}).then((todo) => {

});

Todo.findByIdAndRemove('5a7440192fe97edc05068bee').then((todo) => {
  console.log(todo);
});
