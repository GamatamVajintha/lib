module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary', // You can use other providers as well
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
  },
  // Other Strapi configurations...
});
