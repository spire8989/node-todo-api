const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a738b42a6eb5e6833fe34de11';
//
// if(!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '5a737222f2c74ca814d5aad8';
//User.findByID
// handle no User
// handle User
// print errors
User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User Id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
