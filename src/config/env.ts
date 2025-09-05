/**
 * Centralise l'accès aux variables d'environnement.
 */
export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 3000),
};
