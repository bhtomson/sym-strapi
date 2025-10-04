const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  const conn = parse(env('DATABASE_URL'));
  const ssl = env.bool('DATABASE_SSL', true);

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: conn.host,
        port: conn.port,
        database: conn.database,
        user: conn.user,
        password: conn.password,
        ssl: ssl ? { rejectUnauthorized: false } : false,
      },
      acquireTimeout: 60000,
    },
  };
};
