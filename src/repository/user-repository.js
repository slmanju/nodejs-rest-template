import User from "../model/user-model";

const findAll = async () => {
  return await User.find();
};

const findById = async (id) => {
  return await User.findById(id);
};

const save = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

const update = async (id, user) => {
  await User.updateOne({ id }, user);
  return await User.findById(id);
};

const deleteById = async (id) => {
  await User.deleteOne({ _id: id });
};

export default { findAll, findById, save, update, deleteById };
