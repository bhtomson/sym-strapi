module.exports = ({ env }) => ({
  proxy: true,
  host: '0.0.0.0',
  port: env.int('PORT', 1337),

  // must be a full https URL or fall back to Render’s provided URL
  url: env('PUBLIC_URL', env('RENDER_EXTERNAL_URL', '')),

  app: {
    // MUST be 4 comma-separated secrets (see generators below)
    keys: env.array('APP_KEYS'),
  },

  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    // optional: remove if you haven't added sessions in admin.js
  },
});
