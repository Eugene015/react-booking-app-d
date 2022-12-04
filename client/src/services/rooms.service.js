import httpService from "./http.service";

const userEndpoint = "rooms/";

const roomsService = {
  get: async () => {
    const { data } = await httpService.get(userEndpoint);
    console.log(data);
    return data;
  },
};
export default roomsService;
