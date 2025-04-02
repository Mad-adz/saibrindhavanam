import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

redis.on("connect", () => console.log("✅ Connected to Redis!"));
redis.on("error", (err) => console.error("❌ Redis error:", err));
redis.on("reconnecting", (delay) => console.log(`🔄 Reconnecting in ${delay}ms!`));
redis.on("end", () => console.log("❌ Redis connection closed!"));

// const connectRedis = () => {
//   try {
//     const redis = new Redis(process.env.UPSTASH_REDIS_URL);

//     redis.on("connect", () => {
//       console.log("Connected to Redis successfully");
//     });

//     redis.on("error", (error) => {
//       console.error("Redis connection error:", error);
//       process.exit(1);
//     });

//     return redis;
//   } catch (error) {
//     console.error("Failed to connect to Redis:", error);
//     process.exit(1);
//   }
// };

// export const redis = connectRedis();
