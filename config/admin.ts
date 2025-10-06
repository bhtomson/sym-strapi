// config/admin.ts — Strapi v5
export default ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT'),
    secrets: {
      // prevents "Encryption key is missing" warnings
      encryptionKey: env('ADMIN_ENCRYPTION_KEY'),
    },
  },
  auth: {
    // ✅ this is the one Strapi is asking for
    secret: env('ADMIN_JWT_SECRET'),
    // optional but recommended session settings (v5)
    sessions: {
      accessTokenLifespan: env.int('ADMIN_ACCESS_TOKEN_LIFESPAN', 1800),              // 30m
      maxRefreshTokenLifespan: env.int('ADMIN_MAX_REFRESH_TOKEN_LIFESPAN', 2592000),  // 30d
      maxSessionLifespan: env.int('ADMIN_MAX_SESSION_LIFESPAN', 2592000),             // 30d
      idleRefreshTokenLifespan: env.int('ADMIN_IDLE_REFRESH_TOKEN_LIFESPAN', 604800), // 7d
    },
  },
  transfer: {
    token: { salt: env('TRANSFER_TOKEN_SALT') },
  },
});
