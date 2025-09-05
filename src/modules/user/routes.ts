import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
} from "./controllers/user.controller";

/**
 * User routes for handling user-related API endpoints.
 * POST / - Create a new user
 * GET / - Retrieve all users
 */
const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
