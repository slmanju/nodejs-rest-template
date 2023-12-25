import mongoose from "mongoose";

const URL = process.env.DATABASE_URL;

const database = async () => await mongoose.connect(URL);

export default database;
