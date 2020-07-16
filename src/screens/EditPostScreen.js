import React, { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditPostScreen = ({ route, navigation }) => {
  const { state, editBlogPost } = useContext(BlogContext);
  const id = route.params.id;
  const blogPost = state.find((post) => post.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
      btnName="Update"
    />
  );
};

export default EditPostScreen;
