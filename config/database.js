// ROOT DB CONFIG (v5) — used by all envs unless overridden
console.log('[STRAPI] ROOT database.js loaded (Postgres)');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
    },
    pool: { min: 0, max: 10 },
    acquireTimeout: 60000,
  },
});
