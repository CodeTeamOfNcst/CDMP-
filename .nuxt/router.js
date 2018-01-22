import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1f4db736 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _0c006873 = () => import('..\\pages\\bulletin.vue' /* webpackChunkName: "pages\\bulletin" */).then(m => m.default || m)
const _fa3b4238 = () => import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages\\test\\index" */).then(m => m.default || m)
const _a2e20972 = () => import('..\\pages\\rules\\index.vue' /* webpackChunkName: "pages\\rules\\index" */).then(m => m.default || m)
const _25be4256 = () => import('..\\pages\\noticecont.vue' /* webpackChunkName: "pages\\noticecont" */).then(m => m.default || m)
const _740d5884 = () => import('..\\pages\\contact.vue' /* webpackChunkName: "pages\\contact" */).then(m => m.default || m)
const _785abfa0 = () => import('..\\pages\\device\\index.vue' /* webpackChunkName: "pages\\device\\index" */).then(m => m.default || m)
const _621a6c66 = () => import('..\\pages\\pug.vue' /* webpackChunkName: "pages\\pug" */).then(m => m.default || m)
const _31bed9ef = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages\\admin\\index" */).then(m => m.default || m)
const _4263db90 = () => import('..\\pages\\device\\details.vue' /* webpackChunkName: "pages\\device\\details" */).then(m => m.default || m)
const _2a18f684 = () => import('..\\pages\\admin\\user.vue' /* webpackChunkName: "pages\\admin\\user" */).then(m => m.default || m)
const _dfd42552 = () => import('..\\pages\\admin\\backappoint.vue' /* webpackChunkName: "pages\\admin\\backappoint" */).then(m => m.default || m)
const _2dd16e48 = () => import('..\\pages\\admin\\announce.vue' /* webpackChunkName: "pages\\admin\\announce" */).then(m => m.default || m)
const _6394208f = () => import('..\\pages\\device\\appoint.vue' /* webpackChunkName: "pages\\device\\appoint" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _1f4db736,
			name: "index"
		},
		{
			path: "/bulletin",
			component: _0c006873,
			name: "bulletin"
		},
		{
			path: "/test",
			component: _fa3b4238,
			name: "test"
		},
		{
			path: "/rules",
			component: _a2e20972,
			name: "rules"
		},
		{
			path: "/noticecont",
			component: _25be4256,
			name: "noticecont"
		},
		{
			path: "/contact",
			component: _740d5884,
			name: "contact"
		},
		{
			path: "/device",
			component: _785abfa0,
			name: "device"
		},
		{
			path: "/pug",
			component: _621a6c66,
			name: "pug"
		},
		{
			path: "/admin",
			component: _31bed9ef,
			name: "admin"
		},
		{
			path: "/device/details",
			component: _4263db90,
			name: "device-details"
		},
		{
			path: "/admin/user",
			component: _2a18f684,
			name: "admin-user"
		},
		{
			path: "/admin/backappoint",
			component: _dfd42552,
			name: "admin-backappoint"
		},
		{
			path: "/admin/announce",
			component: _2dd16e48,
			name: "admin-announce"
		},
		{
			path: "/device/appoint",
			component: _6394208f,
			name: "device-appoint"
		}
    ],
    fallback: false
  })
}
