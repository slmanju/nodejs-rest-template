export const clientError = (message, statusCode) => {
  const error = new Error(message);
  error.status = statusCode || 400;
  return error;
};