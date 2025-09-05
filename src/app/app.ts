import express from "express";
import userRoutes from "../modules/user/routes";

/**
 * Express application setup for user API.
 * - Uses JSON middleware
 * - Mounts user routes at /api/users
 */
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

export default app;
