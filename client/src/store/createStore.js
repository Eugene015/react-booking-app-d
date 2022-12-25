import reservationReducer from "./reservation";
import roomsReducer from "./rooms";
import searchDataReducer from "./searchData";
import usersReducer from "./users";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  users: usersReducer,
  rooms: roomsReducer,
  search: searchDataReducer,
  reservation: reservationReducer,
});

export function createStore() {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    reducer: rootReducer,
  });
}
