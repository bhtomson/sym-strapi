module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT'),
    secrets: {
      encryptionKey: env('ADMIN_ENCRYPTION_KEY'), // add this env var
    },
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      accessTokenLifespan: env.int('ADMIN_ACCESS_TOKEN_LIFESPAN', 1800),              // 30m
      maxRefreshTokenLifespan: env.int('ADMIN_MAX_REFRESH_TOKEN_LIFESPAN', 2592000),  // 30d
      maxSessionLifespan: env.int('ADMIN_MAX_SESSION_LIFESPAN', 2592000),             // 30d
      idleRefreshTokenLifespan: env.int('ADMIN_IDLE_REFRESH_TOKEN_LIFESPAN', 604800), // 7d
    },
  },
  transfer: { token: { salt: env('TRANSFER_TOKEN_SALT') } },
});

