module.exports = {
  async index(ctx) {
    const cfg = strapi.config.get('server');
    ctx.body = {
      ok: true,
      node_env: process.env.NODE_ENV,
      url: cfg?.url,
      proxy: cfg?.proxy === true,
      hasAppKeys: Array.isArray(cfg?.app?.keys) && cfg.app.keys.length === 4,
      // Do NOT print secrets; just confirm presence:
      env: {
        APP_KEYS: !!process.env.APP_KEYS,
        ADMIN_JWT_SECRET: !!process.env.ADMIN_JWT_SECRET,
        API_TOKEN_SALT: !!process.env.API_TOKEN_SALT,
        JWT_SECRET: !!process.env.JWT_SECRET,
        TRANSFER_TOKEN_SALT: !!process.env.TRANSFER_TOKEN_SALT,
        ADMIN_ENCRYPTION_KEY: !!process.env.ADMIN_ENCRYPTION_KEY,
        DATABASE_URL: !!process.env.DATABASE_URL,
        DATABASE_SSL: process.env.DATABASE_SSL,
        CLOUDINARY_VARS: !!(process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET),
        AWS_VARS: !!(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY && process.env.AWS_S3_BUCKET),
        RENDER_EXTERNAL_URL: process.env.RENDER_EXTERNAL_URL || null,
        PUBLIC_URL: process.env.PUBLIC_URL || null,
      },
      reqHeaders: {
        'x-forwarded-proto': ctx.request.header['x-forwarded-proto'] || null,
        host: ctx.request.header.host || null,
      },
    };
  },
};
