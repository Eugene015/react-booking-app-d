const User = require("../models/User");
const Room = require("../models/Room");
const roomsMock = require("../mock/rooms.json");
const usersMock = require("../mock/users.json");

module.exports = async () => {
  const rooms = await Room.find();
  if (rooms.length !== roomsMock.length) {
    await createInitialEntity(Room, roomsMock);
  }
  const users = await User.find();
  if (users.length !== usersMock.length) {
    await createInitialEntity(User, usersMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
      } catch (e) {
        return e;
      }
    })
  );
}
