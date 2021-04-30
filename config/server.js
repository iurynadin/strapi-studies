module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: {
    enabled: true
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '821f4ea28d1d541b9ec07893d64fddbf'),
    },
  },
});
// url: 'https://bad1572d59d1.ngrok.io',
