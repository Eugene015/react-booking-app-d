import { createAction, createSlice } from "@reduxjs/toolkit";
import reservationService from "../services/reservation.service";

const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    entities: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    reservationRequested: (state) => {
      state.isLoading = true;
    },
    reservationReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    reservationRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    reservationCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    reservationRemoved: (state, action) => {
      state.entities = state.entities.filter((r) => r._id !== action.payload);
    },
  },
});

const { reducer: reservationReducer, actions } = reservationSlice;
const {
  reservationRequested,
  reservationReceived,
  reservationRequestFailed,
  reservationCreated,
  reservationRemoved,
} = actions;

const addReservationRequested = createAction(
  "reservation/addReservationRequested"
);
const removeReservationRequested = createAction(
  "reservation/removeCommentRequested"
);

export const loadReservationList = (userId) => async (dispatch) => {
  dispatch(reservationRequested());
  try {
    const { content } = await reservationService.getReservation(userId);
    dispatch(reservationReceived(content));
  } catch (error) {
    dispatch(reservationRequestFailed(error.message));
  }
};
export const createReservation = (payload) => async (dispatch) => {
  dispatch(addReservationRequested());

  try {
    const { content } = await reservationService.createReservation(payload);
    dispatch(reservationCreated(content));
  } catch (error) {
    dispatch(reservationRequestFailed(error.message));
  }
};
export const removeReservation = (reservId) => async (dispatch) => {
  dispatch(removeReservationRequested());
  try {
    const { content } = await reservationService.removeReservation(reservId);
    if (content === null) {
      dispatch(reservationRemoved(reservId));
    }
  } catch (error) {
    dispatch(reservationRequestFailed(error.message));
  }
};

export const getReservations = () => (state) => state.reservation.entities;
export const getReservationsLoadingStatus = () => (state) =>
  state.reservation.isLoading;

export default reservationReducer;
