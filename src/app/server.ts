import app from "./app";

/**
 * Entry point for starting the Express server.
 *
 * Listens on the port defined by the environment variable PORT or defaults to 3000.
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
