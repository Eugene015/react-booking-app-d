export const isAvailable = (alldates, roomData) => {
  const isFound = roomData.unavailableDates.some((date) =>
    alldates.includes(new Date(date).getTime())
  );

  return !isFound;
};
