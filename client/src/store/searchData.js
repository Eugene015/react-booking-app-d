import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: null,
  error: null,
};

const searchDataSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchDataAdded: (state, action) => {
      state.entities = action.payload;
    },
  },
});

const { reducer: searchDataReducer, actions } = searchDataSlice;
const { searchDataAdded } = actions;

export const addSearchData = (payload) => (dispatch) => {
  dispatch(searchDataAdded(payload));
};

export const getSearchData = () => (state) => state.search.entities;

export default searchDataReducer;
