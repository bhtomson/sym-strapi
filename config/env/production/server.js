// Strapi v5
module.exports = ({ env }) => ({
  proxy: true, // trust Render's X-Forwarded-* headers
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', env('RENDER_EXTERNAL_URL', '')), // correct absolute URLs

  app: { keys: env.array('APP_KEYS') },

  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
      // v5 uses sessions; you already added these via config/admin.js (next section)
    },
  },
});
