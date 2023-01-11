const mSecPerDay = 1000 * 60 * 60 * 24;

export function dayDifference(startDate, endDate) {
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(timeDiff / mSecPerDay);

  return diffDays;
}
