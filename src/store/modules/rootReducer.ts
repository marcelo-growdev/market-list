import { combineReducers } from '@reduxjs/toolkit';

import books from './books/BooksSlice';
import items from './items/ItemsSlice';

export default combineReducers({
  books,
  items,
});
