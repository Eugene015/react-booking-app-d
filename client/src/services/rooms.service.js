import httpService from "./http.service";

const roomsEndpoint = "room/";

const roomsService = {
  get: async () => {
    const { data } = await httpService.get(roomsEndpoint);
    console.log(data);
    return data;
  },
};
export default roomsService;
