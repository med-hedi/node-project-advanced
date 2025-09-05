import { Request, Response, NextFunction } from "express";
import { userService } from "../services/user.service";
import { HttpError } from "../../../core/errors/HttpError";

/**
 * Handles the creation of a new user.
 * @param {Request} req Express request object containing user data in the body
 * @param {Response} res Express response object
 * @param {NextFunction} next Express next middleware function
 */
export const createUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, name, email } = req.body || {};
    if (!id || !name || !email) {
      throw new HttpError(400, "id, name and email are required");
    }
    const user = userService.create({ id, name, email });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

/**
 * Handles retrieving all users.
 * @param {Request} _req Express request object (unused)
 * @param {Response} res Express response object
 * @param {NextFunction} next Express next middleware function
 */
export function getUsers(_req: Request, res: Response, next: NextFunction) {
  try {
    const users = userService.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

/**
 * Handles retrieving a user by their ID.
 * @param {Request} req Express request object containing the user ID in params
 * @param {Response} res Express response object
 * @param {NextFunction} next Express next middleware function
 */
export function getUserById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const user = userService.findById(id);
    if (!user) {
      throw new HttpError(404, `User with id ${id} not found`);
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
}
