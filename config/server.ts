export default ({ env }) => ({
  proxy: true,
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', env('RENDER_EXTERNAL_URL', '')),
  app: { keys: env.array('APP_KEYS') },
  admin: { auth: { secret: env('ADMIN_JWT_SECRET') } },
});
