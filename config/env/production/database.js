// path: ./config/env/production/database.js

const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "ec2-3-219-135-162.compute-1.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "d61clhe3oargkn"),
      user: env("DATABASE_USERNAME", "defninshbzjgxn"),
      password: env("DATABASE_PASSWORD", "5e3b5c8a476e1dd855205246217f5b4840bb18cc9034202b12c1a0ebd0434f1c"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
