export default [
  'strapi::logger',
  'strapi::errors',
  { name: 'strapi::security', config: { contentSecurityPolicy: { useDefaults: true } } },
  'strapi::cors',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
