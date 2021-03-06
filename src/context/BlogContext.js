import createDataContext from './createDataContext';
import moment from 'moment';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogpost':
      return action.payload;
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
          date: moment(),
        },
      ];
    case 'edit_blogpost':
      return state.map((blogpost) => {
        return blogpost.id === action.payload.id ? action.payload : blogpost;
      });
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'get_blogpost', payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, date, callback) => {
    await jsonServer.post('/blogposts', { title, content, date });
    // dispatch({ type: 'add_blogpost', payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
