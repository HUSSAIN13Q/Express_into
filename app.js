const express = require("express");
const app = express();

app.get("/hussain", (request, response) => {
  response.json({ message: "hiii" });
});
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`the app is running in the port http://localhost:${PORT}`);
});
