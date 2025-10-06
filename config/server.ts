export default ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1337),

  // public origin must be your HTTPS Render URL
  url: env('PUBLIC_URL', env('RENDER_EXTERNAL_URL', '')),

  app: { keys: env.array('APP_KEYS') },

  // v5 shape — tells Koa to trust X-Forwarded-* (needed for secure cookies behind Render)
  proxy: { koa: true },
});
