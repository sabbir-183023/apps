import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dataRoutes from "./routes/data.js";
import authRoutes from "./routes/auth.js";


const PORT = 8081;
const CONNECTION_URL = "mongodb+srv://sabbirus183023:sabbir123@cluster0.z2nzcwr.mongodb.net/CpaAffiliate?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(CONNECTION_URL);

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://unicode-beta.vercel.app"],
    credentials: true,
  })
);

app.use("/api/data", dataRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`${"app is running on port " + PORT}`);
});
