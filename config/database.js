module.exports = ({ env }) => ({
  connection: {
    // Update your postgres credentials here
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "ec2-34-193-44-192.compute-1.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "d7o1fv2r8la9go"),
      user: env("DATABASE_USERNAME", "awlofqxapfxphz"),
      password: env("DATABASE_PASSWORD", "b61f5341a81178636c41d8b923a67161fd8cae60cfbcb9dff7b6b42c2126ea7b"),
      ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), },
    },
  },
});
