export const errorLogger = (error, _req, _res, next) => {
  // eslint-disable-next-line no-console
  console.error(`[Error] - ${error.message}`);
  next(error);
};

export const errorHandler = (error, _req, res, _next) => {
  const statusCode = error.status || 400;
  const message = error.message || "Error";
  res.status(statusCode).send({ statusCode, message, error: "Bad Request" });
};

export const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};
