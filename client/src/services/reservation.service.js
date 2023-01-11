import httpService from "./http.service";
const reservationEndpoint = "reservation/";

const reservationService = {
  createReservation: async (payload) => {
    const { data } = await httpService.post(reservationEndpoint, payload);
    return data;
  },
  getReservation: async (userId) => {
    const { data } = await httpService.get(reservationEndpoint + userId);
    return data;
  },
  getAllReservation: async () => {
    const { data } = await httpService.get(reservationEndpoint);
    return data;
  },
  removeReservation: async (reservId) => {
    const { data } = await httpService.delete(reservationEndpoint + reservId);
    return data;
  },
};
export default reservationService;
