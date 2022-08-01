import { combineReducers } from '@reduxjs/toolkit';

import books from './books/BooksSlice';

export default combineReducers({
  books,
});
