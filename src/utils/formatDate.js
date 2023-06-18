export const formatDate = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return `${year}-${month < 10 ? "0" + (month + 1) : month + 1}-${
    date < 10 ? "0" + date : date
  }`;
};
