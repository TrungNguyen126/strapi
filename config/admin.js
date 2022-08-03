module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});

// 8120e5c793a7ba588dee9306f9694c1d9eead86568051daceeef8e046b759f77ec307553b990e33ce2ef99cd5edf9e81fc92c56e3fa5096f7682b6d087a2f2f9d03e2a0fbf60a7451df7978e72fe95467f0fa7a7c15da42997e9ec1f345106fd7e8f4977146a93fff04ae5f4cd9e794e17af443572c5d5a43c20896da510e866