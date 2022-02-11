import moment from "moment";
export const capitalize = (string) => {
  if (!string) return "";
  const data = string.toLowerCase();
  return data.charAt(0).toUpperCase() + data.slice(1);
};
export const formatCurrency = (value) => {
  if (!value) return "";
  let val = (value / 1).toFixed(2).replace(".", ".");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const formatDate = (value) => {
  if (!value) return "";
  return moment(value).format("DD MMM, YYYY, HH:mm");
};
