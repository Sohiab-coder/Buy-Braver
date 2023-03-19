const app = require("./app");
const mongoConnection = require("./database/db");

mongoConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server is working: http://localhost:${process.env.PORT}`);
});
