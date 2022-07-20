import sass from 'sass'

// ビルド時のディレクトリ
const targetDir = '/unidentified/'
// const targetDir = '/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: '正体不明',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'わたしは何者?',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '正体不明',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://kaiiy.github.io/unidentified/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '正体不明',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'わたしは何者?',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://kaiiy.github.io/unidentified//share.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'robots', name: 'robots', content: 'noindex' },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        href: targetDir + 'favicon.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: targetDir + 'favicon.png',
      },
      {
        rel: 'apple-touch-icon',
        href: targetDir + 'favicon.png',
      },
      // フォント
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=M+PLUS+2&display=swap',
        rel: 'stylesheet',
      },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.2/web-animations.min.js',
        integrity:
          'sha512-oAY57i8MXmaOP7pAylNLnULAM4QLV3uGnvnXVY4zF229/zFzTvG2/5YIgH8iN8oZR2hnbkiDPd4JCJGaH4oG6g==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer',
        defer: true,
      },
    ],
  },

  router: {
    base: targetDir,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  // ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: false,
    },
    theme: {
      dark: false,
      themes: {
        light: {
          background: '#fafafa',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: sass,
      },
    },
  },
}
