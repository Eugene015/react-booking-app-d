import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const roomsEndpoint = "room/";

const roomsService = {
  get: async () => {
    const { data } = await httpService.get(roomsEndpoint);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      roomsEndpoint + localStorageService.getRoomId(),
      payload
    );

    return data;
  },
};
export default roomsService;
