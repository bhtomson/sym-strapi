// Strapi v5 — Postgres on Render
console.log('[STRAPI] Using PRODUCTION Postgres database config (v5 shape)');

module.exports = ({ env }) => ({
  client: 'postgres',
  connection: {
    // simplest & most robust on Render
    connectionString: env('DATABASE_URL'),
    ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
  },
  pool: {
    min: 0,
    max: 10,
  },
  acquireTimeout: 60000,
});
