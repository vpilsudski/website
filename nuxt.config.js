const title = 'Chapi.to'
const description = 'Chapi.to'
const url = "https://chapi.to"
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: title,
    // this htmlAttrs you need
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: description},
      {hid: 'ogtitle', property: 'og:title', content: title},
      {hid: 'ogdescription', property: 'og:description', content: description},
      {hid: 'ogtype', property: 'og:type', content: 'website'},
      {hid: 'ogurl', property: 'og:url', content: url},
      {hid: 'ogimage', property: 'og:image', content: url + 'cover.jpg'},
      {property: 'og:locale', content: 'fr_FR'},
      // Twitter Card
      {hid: 'twittercard', name: 'twitter:card', content: 'summary'},
      {hid: 'twittersite', name: 'twitter:site', content: '@chapi_to'},
      {hid: 'twittertitle', name: 'twitter:title', content: title},
      {hid: 'twitterdescription', name: 'twitter:description', content: description},
      {hid: 'twitterimage', name: 'twitter:image', content: url + 'cover.jpg'},
      {hid: 'twitterimagealt', name: 'twitter:image:alt', content: 'Chapito logo'},
      {name: 'apple-mobile-web-app-title', content: title},
      {name: 'application-name', content: title},
      {name: 'msapplication-TileColor', content: '#ffffff'},
      {name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=WGoYma5yEm'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=WGoYma5yEm'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=WGoYma5yEm'},
      {rel: 'manifest', href: '/site.webmanifest?v=WGoYma5yEm'},
      {rel: 'mask-icon', href: '/safari-pinned-tab.svg?v=WGoYma5yEm', color: '#333333'},
      {rel: 'shortcut icon', href: '/favicon.ico?v=WGoYma5yEm'}

    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#222333'},

  plugins: [{ src: '~plugins/vue-carousel', ssr: false }],

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css'
  ],
}
