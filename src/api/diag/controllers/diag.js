module.exports = {
  async index(ctx) {
    const cfg = strapi.config.get('server');
    ctx.body = {
      ok: true,
      url: cfg?.url || null,
      proxy: cfg?.proxy === true,
      hasAppKeys: Array.isArray(cfg?.app?.keys) && cfg.app.keys.length === 4,
      env: {
        PUBLIC_URL: process.env.PUBLIC_URL || null,
        RENDER_EXTERNAL_URL: process.env.RENDER_EXTERNAL_URL || null,
      },
      headers: {
        'x-forwarded-proto': ctx.request.header['x-forwarded-proto'] || null,
        host: ctx.request.header.host || null,
      },
    };
  },
};
