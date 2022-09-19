import express from "express";
import dotenv from "dotenv";
import AppError from "./utils/AppError.js";
import mongoose from "mongoose";

// routes
import userRouter from "./routes/userRoutes.js";
import articleRouter from "./routes/articleRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/img"));

app.use("/api/user", userRouter);
app.use("/api/article", articleRouter);

app.use("*", (req, res, next) => {
  next(new AppError("There is no such route", 404));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message =
    err.message || "Something went wrong! Please try again later!";

  res.status(statusCode).json({ message });
});

const startApp = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server has started on port ${PORT}`);
      });
    })
    .catch((err) => console.log(err));
};

startApp();
