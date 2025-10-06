'use strict';
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (process.env.NODE_ENV === 'production') {
      const xf = ctx.request.header['x-forwarded-proto'];
      if (!xf || xf !== 'https') ctx.request.header['x-forwarded-proto'] = 'https';
    }
    await next();
  };
};
