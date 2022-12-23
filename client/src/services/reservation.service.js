import httpService from "./http.service";
const reservationEndpoint = "reservation/";

const reservationService = {
  createReservation: async (payload) => {
    const { data } = await httpService.post(reservationEndpoint, payload);
    return data;
  },
  getReservation: async (reservId) => {
    const { data } = await httpService.get(reservationEndpoint + reservId);
    return data;
  },
  removeReservation: async (reservId) => {
    const { data } = await httpService.delete(reservationEndpoint + reservId);
    return data;
  },
};
export default reservationService;
