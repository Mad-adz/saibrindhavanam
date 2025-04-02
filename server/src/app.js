import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import contactRoute from "./routes/contactRoute.js";
import donationRoute from "./routes/donationRoute.js";
// import { redis } from "./config/redis/upstashRedis.js";

dotenv.config();

const PORT = 5000;
const app = express();

// const whitelist = [process.env.CLIENT_APP_BASE_URL, "http://localhost:5173"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.some((url) => origin && origin.startsWith(url)) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

const whitelist = [
  process.env.CLIENT_APP_BASE_URL.replace(
    /\/$/,
    "https://www.saibrindhavanam.com"
  ),
]; // Remove trailing slash

const corsOptions = {
  origin: function (origin, callback) {
    console.log("CORS Origin:", origin); // Debugging log
    console.log("Allowed Origin:", whitelist);

    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

// Handle OPTIONS preflight requests before routes
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    console.log("Handling preflight request...");
    res.setHeader(
      "Access-Control-Allow-Origin",
      process.env.CLIENT_APP_BASE_URL
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    return res.sendStatus(200);
  }
  next();
});

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/contact", contactRoute);
app.use("/api/donation", donationRoute);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // console.log(`${redis.options.host}:${redis.options.port}`);
});
