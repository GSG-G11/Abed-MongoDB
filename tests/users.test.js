const connection = require('../database/connection');
const {createUser, deleteUsers, getUser} = require('../database/queries/users');

test('test creating a new user', () => {
  const user = {
    firstName: 'Falafel',
    lastName: 'Tree',
    age: 25,
    city: 'Gaza Strip',
  };

  expect.assertions(1);

  return deleteUsers()
    .then(() => createUser(user))
    .then(res => {
      expect(res.firstName).toBe(user.firstName);
    })
    .catch(err => {
      console.log(err);
      expect(err.name).toBe('MongoServerError');
      expect(err.code).toBe(11000);
    });
});

test('Get users by first name', () => {
  const name = {
    firstName: 'Falafel',
  };

  return getUser(name).then(res => {
    console.log(res);
    expect(res.firstName).toBe(name.firstName);
  });
});
afterAll(() => connection.close());
