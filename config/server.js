// ROOT SERVER CONFIG (v5) — applies in all envs unless overridden
console.log('[STRAPI] ROOT server.js loaded');

module.exports = ({ env }) => ({
  proxy: true,
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', env('RENDER_EXTERNAL_URL', '')),
  app: { keys: env.array('APP_KEYS') },
  admin: { auth: { secret: env('ADMIN_JWT_SECRET') } },
});
