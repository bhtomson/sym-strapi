module.exports = ({ env }) => ({
  proxy: true, // trust Render's reverse proxy
  host: '0.0.0.0',
  port: env.int('PORT', 1337),

  // ensures correct absolute URLs for admin and API
  url: env('PUBLIC_URL', env('RENDER_EXTERNAL_URL', '')),

  app: {
    keys: env.array('APP_KEYS'),
  },

  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
