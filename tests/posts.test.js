const connection = require('../database/connection');
const {createPost, deleteAllPosts} = require('../database/queries/posts');
const {deleteUsers, createUser} = require('../database/queries/users');

test('Create post attached to user', () => {
  const user = {
    firstName: 'Abedalrahman',
    lastName: 'Shamia',
    age: 30,
    city: 'New york',
  };

  return deleteAllPosts()
    .then(() => deleteUsers())
    .then(() => createUser(user))
    .then(newUser =>
      createPost({
        content: 'This is my first post',
        author: newUser._id,
      })
    )
    .then(res => {
      console.log(res);
      expect(res.content).toBe('This is my first post');
      expect(res).toHaveProperty('author');
    });
});

afterAll(() => connection.close());
