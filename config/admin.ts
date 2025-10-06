export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      // (optional) tune lifespans to silence the deprecation warning from earlier logs
      maxRefreshTokenLifespan: 60 * 60 * 24 * 30, // 30d
      maxSessionLifespan:      60 * 60 * 24 * 30, // 30d
    },
    cookie: {
      // (optional) leave 'secure' to Strapi; it’s derived from ctx.secure once proxy is trusted
      path: '/admin',
      sameSite: 'lax',
    },
  },
  apiToken: { salt: env('API_TOKEN_SALT') },
  transfer: { token: { salt: env('TRANSFER_TOKEN_SALT') } },
});
