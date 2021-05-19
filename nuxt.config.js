export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'saas-front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {
    strategies: {
      local: false,
      keycloak: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'http://localhost:8080/auth/realms/demo/protocol/openid-connect/auth',
          token: 'http://localhost:8080/auth/realms/demo/protocol/openid-connect/token',
          userInfo: 'http://localhost:8080/auth/realms/demo/protocol/openid-connect/userinfo',
          logout: 'http://localhost:8080/auth/realms/demo/protocol/openid-connect/logout?redirect_uri=' + encodeURIComponent('https://localhost:3000')
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          name: 'Authorization',
          maxAge: 300
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: 'client',
        scope: ['openid', 'profile', 'email'],
        codeChallengeMethod: 'S256'
        }
      },

      redirect: {
        login: '/login',
        logout: '/',
        home: '/'
      },
    }
}
