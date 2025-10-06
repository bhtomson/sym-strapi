export default [
  { name: 'global::force-secure' },   // must run before security/cookies

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
