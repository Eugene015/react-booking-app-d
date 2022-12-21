import commentsReducer from "./comments";
import roomsReducer from "./rooms";
import searchDataReducer from "./searchData";
import usersReducer from "./users";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  users: usersReducer,
  rooms: roomsReducer,
  search: searchDataReducer,
  comments: commentsReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
