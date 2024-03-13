const express = require("express");
const CDatabase = require("./modules/CDatabase").default;
const app = express();
const port = 9000;

app.get("/api/v1/", (req, res) => {
  setTimeout(() => {
    res.json({
      message: "Hello,Express!",
    });
  }, 500);
});

app.get("/api/dbcreate/", (req, res) => {
  db = new CDatabase();
  db.createDatabaseTables();
});
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
