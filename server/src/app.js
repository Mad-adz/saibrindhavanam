import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import contactRoute from "./routes/contactRoute.js";

dotenv.config();

const PORT = 5000;
const app = express();

const whitelist = [process.env.CLIENT_APP_BASE_URL, "http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.some((url) => origin && origin.startsWith(url)) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
