'use strict';

// If behind a proxy that *sometimes* omits x-forwarded-proto,
// make sure Koa/Strapi see the request as HTTPS so secure cookies work.
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Only coerce when we’re on the public host (your Render URL)
    const publicUrl = process.env.PUBLIC_URL || process.env.RENDER_EXTERNAL_URL || '';
    const publicHost = publicUrl.replace(/^https?:\/\//, '');

    // If the request host matches our public host, force https perception
    if (publicHost && ctx.request.header && ctx.request.header.host === publicHost) {
      // If header missing or not https, set it to https so ctx.request.secure === true
      if (!ctx.request.header['x-forwarded-proto'] || ctx.request.header['x-forwarded-proto'] !== 'https') {
        ctx.request.header['x-forwarded-proto'] = 'https';
      }
    }

    await next();
  };
};
