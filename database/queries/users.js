const User = require('../models/User');

// Insert a new user
const createUser = ({firstName, lastName, age, city}) => {
  return User.create({
    firstName,
    lastName,
    age,
    city,
  });
};

// Get all users

const getUsers = () => User.find();

// Get User by Name

const getUser = ({name}) => User.findOne({name});

// Delete All Users

const deleteUsers = () => User.deleteMany();

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUsers,
};
