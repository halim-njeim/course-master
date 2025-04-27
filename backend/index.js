import express from "express";

const app = express();

app.listen(8000, (e) => {
  if (e) console.log("Server Error", e);
  else console.log("Server running");
});
