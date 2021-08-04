import { combineReducers, createReducer } from "@reduxjs/toolkit";
import actions, {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  getContactError,
  getContactSuccess,
  getContactRequest,
} from "./phoneBookActions";

const items = createReducer([], {
  [getContactSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, action) => [action.payload, ...state],
  [deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [getContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
