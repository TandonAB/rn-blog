import React, { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import moment from 'moment';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  const onSubmit = (title, content, created_at) => {
    created_at = moment();
    addBlogPost(title, content, created_at, () => navigation.navigate('Index'));
  };

  return <BlogPostForm onSubmit={onSubmit} btnName="Add New Post" />;
};

export default CreateScreen;
