const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
  pwa: {
    dest: "public",
    register:true,
    skipWaiting:true,
    buildExcludes: [/middleware-manifest.json$/],
    disable: process.env.NODE_ENV === 'development',

  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  }
});


// module.exports = {
//   reactStrictMode: true,
// }
