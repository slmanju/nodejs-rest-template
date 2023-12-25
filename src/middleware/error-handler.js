export const errorLogger = (err, _req, _res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  next(err);
};

export const errorHandler = (err, _req, res, _next) => {
  const statusCode = err.status || 400;
  const message = err.message || "Error";
  res.status(statusCode).send({ statusCode, message, error: "Bad Request" });
};

export const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};
