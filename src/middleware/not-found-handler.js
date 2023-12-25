const notFound = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.error("Page not found");
  res.status(200).send({ message: "Page not found!!!" });
};

export default notFound;
