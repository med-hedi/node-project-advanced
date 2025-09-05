import express, { Request, Response } from "express";
import userRoutes from "../modules/user/routes";

/**
 * Express application setup for user API.
 *
 * - Uses JSON middleware
 * - Mounts user routes at /api/users
 */
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

// Global error handler for consistent error responses
app.use((err: unknown, req: Request, res: Response) => {
  const status =
    typeof err === "object" && err && "status" in err
      ? (err as { status?: number }).status || 500
      : 500;
  res.status(status).json({
    message: err instanceof Error ? err.message : "Internal Server Error",
  });
});

export default app;
