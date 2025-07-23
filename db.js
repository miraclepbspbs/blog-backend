require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const blogSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Blog = mongoose.model('Blog', blogSchema);

module.exports = { mongoose, Blog };
