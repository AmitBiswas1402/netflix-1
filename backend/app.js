import express from "express";

import authRoutes from "./routes/auth.routes.js";
import movieRoutes from "./routes/movie.routes.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectToDB } from "./db/db.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectToDB();
});
