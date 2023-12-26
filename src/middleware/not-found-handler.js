const notFound = (req, res, _next) => {
  // eslint-disable-next-line no-console
  console.error(`[Error] - Path not found ${req.originalUrl}`);
  res.status(200).send({ message: `Path not found ${req.originalUrl}` });
};

export default notFound;
