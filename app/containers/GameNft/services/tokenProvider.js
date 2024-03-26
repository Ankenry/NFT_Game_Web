export const getToken = () => {
  const localToken = localStorage.getItem('token');
  return localToken !== null ? localToken : null;
};
// // export default getToken;
// // module.exports = getToken;
