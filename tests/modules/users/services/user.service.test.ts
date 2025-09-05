import { UserService } from "../src/modules/user/services/user.service";
import { User } from "../src/modules/user/models/user.model";

describe("UserService", () => {
  let userService: UserService;
  const mockUser: User = { id: "1", name: "Jean", email: "jean@example.com" };

  beforeEach(() => {
    userService = new UserService();
  });

  it("should create a new user", () => {
    const user = userService.create(mockUser);
    expect(user).toEqual(mockUser);
    expect(userService.findAll()).toContainEqual(mockUser);
  });

  it("should retrieve all users", () => {
    userService.create(mockUser);
    const users = userService.findAll();
    expect(users.length).toBe(1);
    expect(users[0]).toEqual(mockUser);
  });

  it("should find a user by id", () => {
    userService.create(mockUser);
    const user = userService.findById("1");
    expect(user).toEqual(mockUser);
  });

  it("should return undefined if user not found by id", () => {
    const user = userService.findById("nonexistent");
    expect(user).toBeUndefined();
  });
});
