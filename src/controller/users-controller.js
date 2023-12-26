import userService from "../service/user-service";

const findAll = async (_req, res) => {
  const users = await userService.findAll();
  res.status(200).send(users);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(id);
  res.send(user);
};

const saveUser = async (req, res) => {
  const { username, password, role } = req.body;
  const user = await userService.saveUser({ username, password, role });
  res.status(201).send(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  const user = await userService.updateUser(id, { role });
  res.send(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  res.status(204).send({});
};

export default { findAll, findById, saveUser, updateUser, deleteUser };
