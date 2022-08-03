module.exports = ({ env }) => ({
  host: env('HOST'|| 'https://axies-strapi.herokuapp.com:1337/admin'),
  port: env.int('PORT' || 1337),
  app: {
    keys: ['myKeyA','myKeyB'],
  },
  admin: {
    autoOpen: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8c138357c06a40b6f15cd4fcd87e2606'),
   },
  },
});
