import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const roomsEndpoint = "room/";

const roomsService = {
  get: async () => {
    const { data } = await httpService.get(roomsEndpoint);
    console.log(data);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      roomsEndpoint + localStorageService.getRoomId(),
      payload
    );
    console.log(data);
    return data;
  },
};
export default roomsService;
