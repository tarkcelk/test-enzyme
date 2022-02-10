export const isAllUpperCase = (string = '') => {
  if (!string) return false;

  return string.toUpperCase() === string;
};
