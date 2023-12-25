import app from "./app";
import database from "./configuration/database";

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await database();
    app.listen(PORT, () => console.log(`Application started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
