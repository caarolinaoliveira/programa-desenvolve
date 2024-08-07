import "dotenv/config";
import app from "./src/js/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
