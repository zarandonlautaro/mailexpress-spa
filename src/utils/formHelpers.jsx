const validateEmail = (email) => {
  const re = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
}

const getDayMonthYear = (date) => {
  date = new Date();
  const month = date.getUTCMonth() + 1; //months from 1-12
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getUTCFullYear();
  return (`${day}/${month}/${year}`);
}

const getInputDate = (date) => {
  date = new Date();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getUTCFullYear();
  return (`${year}-${month}-${day}`);
}

export { validateEmail, getDayMonthYear, getInputDate };