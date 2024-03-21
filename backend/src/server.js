require("./config/db.js");
const app = require("./app.js");
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`task manager app is listning on port ${port}`);
});
