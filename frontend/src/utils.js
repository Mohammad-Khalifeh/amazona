export const getError = (error) => {
  return error.response && error.response.data.message // if we get error
    ? error.response.data.message // if true return the message that we give
    : error.message; // else return the normal message
};
