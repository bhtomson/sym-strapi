// Strapi v5 uses the same middlewares config shape
module.exports = [
  { name: 'global::force-https' }, // our middleware runs first

  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: { useDefaults: true },
    },
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::cors',
    config: {
      origin: [process.env.PUBLIC_URL || process.env.RENDER_EXTERNAL_URL],
      credentials: true,
    },
  },
  'strapi::public',
];
