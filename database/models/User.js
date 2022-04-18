const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  firstName: {type: 'string', required: true, unique: true},
  lastName: 'string',
  age: 'number',
  city: 'string',
});

const User = model('User', userSchema);

module.exports = User;
