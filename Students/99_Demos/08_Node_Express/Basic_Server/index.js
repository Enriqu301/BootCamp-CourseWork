// FOUNDATIONS
const express = require("express");
const app = express();

// ROUTE HANDLERS
app.get("/", (req, res) => {
  res.send("My first server. Yeah!!!!!");
});

const port = process.env.PORT || 3000;
// LISTENER
app.listen(port, () => console.log(`App listening on port ${port}`));
