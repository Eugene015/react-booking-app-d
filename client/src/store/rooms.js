import { createSlice } from "@reduxjs/toolkit";
import roomsService from "../services/rooms.service";

const initialState = {
  entities: null,
  isLoading: true,
  error: null,
  isLoggedIn: true,
  dataLoaded: false,
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    roomsRequested: (state) => {
      state.isLoading = true;
    },
    roomsReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    roomsRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    roomsUnavDaysUpdated: (state, action) => {
      const index = state.entities.findIndex(
        (room) => room._id === action.payload._id
      );
      state.entities[index] = { ...action.payload };
    },
    roomsUnavDaysAddedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: roomsReducer, actions } = roomsSlice;
const {
  roomsRequested,
  roomsReceived,
  roomsRequestFiled,
  roomsUnavDaysUpdated,
  roomsUnavDaysAddedFailed,
} = actions;

export const loadRoomsList = () => async (dispatch) => {
  dispatch(roomsRequested());
  try {
    const { content } = await roomsService.get();
    dispatch(roomsReceived(content));
  } catch (error) {
    dispatch(roomsRequestFiled(error.message));
  }
};

export const unavailableDatesUpdated = (payload) => async (dispatch) => {
  try {
    const { content } = await roomsService.update(payload);
    dispatch(roomsUnavDaysUpdated(content));
  } catch (error) {
    dispatch(roomsUnavDaysAddedFailed(error.message));
  }
};

export const getRoomsList = () => (state) => state.rooms.entities;
export const getRoomById = (roomId) => (state) => {
  if (state.rooms.entities) {
    return state.rooms.entities.find((r) => r._id === roomId);
  }
};

export const getDataStatus = () => (state) => state.rooms.dataLoaded;
export const getRoomsLoadingStatus = () => (state) => state.rooms.isLoading;

export default roomsReducer;
