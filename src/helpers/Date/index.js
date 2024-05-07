export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth() +1];

/**
 * The function getMonth takes a date as input and should return the month of that date.
 * @param date - The `getMonth` function is likely intended to extract the month from a given date. To
 * implement this function, you can use the `getMonth` method of the `Date` object in JavaScript.
 * Here's how you can complete the function:
 */
export const getMonthBis = (date = new Date()) => {
  if (!(date instanceof Date)) throw new Error("The input is not a date");
  const m = date.getMonth(); // 0, 1, 2, ..., 11
  return MONTHS[m+1]
}
