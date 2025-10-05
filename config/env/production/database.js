// PRODUCTION Postgres (Strapi v5) — correct shape
console.log('[STRAPI] Using PRODUCTION Postgres database config');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      // easiest & robust on Render
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
    },
    pool: {
      min: 0,
      max: 10,
    },
    acquireTimeout: 60000,
  },
});

