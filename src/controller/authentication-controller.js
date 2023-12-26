import generateToken from "../service/authentication-service";

const getToken = async (req, res) => {
  const { username, password } = req.body;
  const token = await generateToken(username, password);
  res.status(200).send({ token });
};

export default { getToken };
