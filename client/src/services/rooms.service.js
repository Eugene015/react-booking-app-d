import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const roomsEndpoint = "room/";

const roomId = localStorageService.getRoomId();
console.log(roomId);

const roomsService = {
  get: async () => {
    const { data } = await httpService.get(roomsEndpoint);
    console.log(data);
    return data;
  },
  update: async (payload) => {
    console.log(payload);
    const { data } = await httpService.patch(roomsEndpoint + roomId, payload);
    console.log(data);
    return data;
  },
};
export default roomsService;
