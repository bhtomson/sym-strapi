module.exports = [
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
      origin: ['https://sym-strapi.onrender.com'],
      credentials: true,
    },
  },
  'strapi::public',
];
