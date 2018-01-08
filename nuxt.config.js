module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
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
  ** 防止重复打包
  */
  build: {
    vendor: ['axios', 'element-ui']
  },
  /**
  ** 添加插件
  */
  plugins:['~plugins/element-ui']
}
