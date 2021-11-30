const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  //   pwa: {
  //     dest: 'public',
  //     publicExcludes: [
  //         '!robots.txt',
  //         '!sitemap.xml.gz',
  //     ],
  // },
});


// module.exports = {
//   reactStrictMode: true,
// }
