import express from "express";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRoute.js";
const app = express();
const PORT = process.env.PORT || 8001;

// db connect
import { connectDb } from "./config/dbConfig.js";
connectDb();

//middlewares
import cors from "cors";
import morgan from "morgan";

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// ErrorHandler

app.get("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "server is live",
  });
});

app.use("*", (req, res, next) => {
  const err = new Error("404 Page not found");
  err.statusCode = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500);
  res.json({
    status: "error",
    message: error.message,
  });
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
