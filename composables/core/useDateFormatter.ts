import moment from "moment";

export const useDateFormatter = () => {
  const formatDate = (dateString) => {
    if (!dateString) return "Invalid Date";
    return moment(dateString).format("DD MMM, YYYY");
  };

  return {
    formatDate,
  };
};
