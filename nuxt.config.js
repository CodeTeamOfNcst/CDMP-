module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', 'element-ui/lib/theme-chalk/index.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /**
   * auth
   */
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios'
  ],
  auth: {
    endpoints: {
      login: { url: '/api/auth/login', method: 'post', propertyName: 'user' },
      logout: { url: '/api/auth/logout', method: 'get' },
      user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
    },
    cookie: {
      name: 'account',
      options: {
        path: '/'
      }
    },
    fetchUserOnLogin: false,
    watchLoggedIn: true
  },
  /**
  ** 防止重复打包
  */
  build: {
    babel: {
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    },
    vendor: ['axios', 'element-ui', 'moment']
  },
  /**
  ** 添加插件
  */
  plugins: ['~plugins/element-ui', '~plugins/axios']
}
