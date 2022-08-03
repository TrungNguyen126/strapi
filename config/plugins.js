module.exports = ({ env }) => ({
  // ...
  upload: {
    // Update your cloudinary credentials here
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "themesflat",
        api_key: "141536345216339",
        api_secret: "18sKMi3H2fH_khYgqa4K_7DQlSQ",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
