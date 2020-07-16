import React, { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  const onSubmit = (title, content) => {
    addBlogPost(title, content, () => navigation.navigate('Index'));
  };

  return <BlogPostForm onSubmit={onSubmit} btnName="Add New Post" />;
};

export default CreateScreen;
