import { combineReducers } from 'redux';

const postsReducer = (posts=[], action) => {
  if (action.type === 'FETCH_POSTS') {
    return action.payload.data;
  }

  return posts;
};

const authReducer = (currentUser=null, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
    case 'NEW_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return null;
    default:
      return currentUser;
  }
};

const errorsReducer = (errorMessages=[], action) => {
  if (action.type.includes('FAILURE')) {
    if (typeof action.payload === 'string') {
      errorMessages = [action.payload];
    } else {
      if (action.payload.errors) errorMessages = action.payload.errors;
      else if (action.payload.detail) errorMessages = [action.payload.detail];
    }
  }

  return errorMessages;
};

export default combineReducers({
  posts: postsReducer,
  currentUser: authReducer,
  errorMessages: errorsReducer,
});
