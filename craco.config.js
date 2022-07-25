const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#747d8c',
              '@font-family': 'Poppins, sans-serif',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
