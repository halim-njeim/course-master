import express from "express";
import guestRoutes from "./routes/guest.routes.js";

const app = express();

app.listen(8000, (e) => {
  if (e) console.log("Server Error", e);
  else console.log("Server running");
});

app.use(express.json());

app.use("/guest", guestRoutes);
