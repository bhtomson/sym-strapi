module.exports = [
  // Run our coercion *before* Strapi's security/cookies
  { name: 'global::force-https' },

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
