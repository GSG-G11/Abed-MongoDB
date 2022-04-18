const Post = require('../models/Post');

const createPost = ({content, author}) => {
  return Post.create({content, author});
};

const findAllPosts = () => Post.find();

const deleteAllPosts = () => Post.deleteMany();

module.exports = {
  createPost,
  findAllPosts,
  deleteAllPosts,
};
