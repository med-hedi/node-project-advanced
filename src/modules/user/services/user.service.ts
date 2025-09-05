import { User } from "../models/user.model";

/**
 * Service for managing users in the system.
 */
export class UserService {
  private users: User[] = [];

  /**
   * Creates a new user and adds it to the list.
   * @param {User} user The user object to add
   * @returns {User} The newly created user
   */
  create(user: User): User {
    this.users.push(user);
    return user;
  }

  /**
   * Retrieves all users in the system.
   * @returns {User[]} An array containing all users
   */
  findAll(): User[] {
    return this.users;
  }

  /**
   * Finds a user by their unique identifier.
   * @param {string} id The unique ID of the user to find
   * @returns {User|undefined} The user if found, otherwise undefined
   */
  findById(id: string): User | undefined {
    return this.users.find((u) => u.id === id);
  }
}

/**
 * Singleton instance of the UserService.
 */
export const userService = new UserService();
