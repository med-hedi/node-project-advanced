import request from "supertest";
import app from "../../src/app/app";

describe("User Routes", () => {
  it("should create a new user", async () => {
    const res = await request(app)
      .post("/api/users/")
      .send({ id: "1", name: "Jean", email: "jean@example.com" });
    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      id: "1",
      name: "Jean",
      email: "jean@example.com",
    });
  });

  it("should get all users", async () => {
    await request(app)
      .post("/api/users/")
      .send({ id: "2", name: "Bob", email: "bob@example.com" });
    const res = await request(app).get("/api/users/");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  it("should get a user by id", async () => {
    await request(app)
      .post("/api/users/")
      .send({ id: "3", name: "Nicolas", email: "nicolas@example.com" });
    const res = await request(app).get("/api/users/3");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: "3",
      name: "Nicolas",
      email: "nicolas@example.com",
    });
  });

  it("should return 404 if user not found", async () => {
    const res = await request(app).get("/api/users/nonexistent");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message");
  });

  it("should return 400 if required fields are missing", async () => {
    const res = await request(app)
      .post("/api/users/")
      .send({ name: "NoId", email: "noid@example.com" });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message");
  });
});
