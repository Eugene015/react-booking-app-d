export const isAvailable = (alldates, roomData) => {
  if (Array.isArray(roomData)) {
    let isFound;
    roomData.some((room) => {
      isFound = room.unavailableDates.some((date) =>
        alldates.includes(new Date(date).getTime())
      );
      return isFound;
    });
    return isFound;
  }
  const isFound = roomData.unavailableDates.some((date) =>
    alldates.includes(new Date(date).getTime())
  );

  return !isFound;
};
