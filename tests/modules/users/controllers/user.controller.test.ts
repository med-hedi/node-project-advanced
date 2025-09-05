import request from "supertest";
import express from "express";
import userRoutes from "../../../../src/modules/user/routes";
import { userService } from "../../../../src/modules/user/services/user.service";

describe("User Controller", () => {
  const app = express();
  app.use(express.json());
  app.use("/api/users", userRoutes);

  beforeEach(() => {
    // Reset the userService state before each test
    (userService as unknown as { users: unknown[] }).users = [];
  });

  it("should create a user and return 201", async () => {
    const res = await request(app)
      .post("/api/users/")
      .send({ id: "1", name: "Test", email: "test@example.com" });
    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      id: "1",
      name: "Test",
      email: "test@example.com",
    });
  });

  it("should return 400 if required fields are missing", async () => {
    const res = await request(app)
      .post("/api/users/")
      .send({ name: "NoId", email: "noid@example.com" });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message");
  });

  it("should get all users", async () => {
    await request(app)
      .post("/api/users/")
      .send({ id: "2", name: "Alice", email: "alice@example.com" });
    const res = await request(app).get("/api/users/");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  it("should get a user by id", async () => {
    await request(app)
      .post("/api/users/")
      .send({ id: "3", name: "Bob", email: "bob@example.com" });
    const res = await request(app).get("/api/users/3");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: "3",
      name: "Bob",
      email: "bob@example.com",
    });
  });

  it("should return 404 if user not found", async () => {
    const res = await request(app).get("/api/users/nonexistent");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message");
  });
});
