export const convertCaseToReadAble = (titleCase) => {
  return titleCase
    .replace(/_/g, " ")
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};
export const formatIntegerToCurrency = (value, currency) => {
  return parseInt(value||0)?.toLocaleString("en-US", {
    style: "currency",
    currency,
  });
};
