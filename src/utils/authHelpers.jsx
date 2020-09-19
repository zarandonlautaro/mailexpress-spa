const isLogin = () => {
  const token = localStorage.getItem('token');
  if (token) return true;
  return false;
}

const setToken = (token) => {
  localStorage.setItem('token', token);
}

export { setToken, isLogin };