import { HttpError } from "@src/core/errors/HttpError";

describe("HttpError", () => {
  it("should create an instance with status and message", () => {
    const error = new HttpError(404, "Not Found");
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(HttpError);
    expect(error.status).toBe(404);
    expect(error.message).toBe("Not Found");
  });

  it("should set the prototype correctly", () => {
    const error = new HttpError(500, "Server Error");
    expect(Object.getPrototypeOf(error)).toBe(HttpError.prototype);
  });
});
