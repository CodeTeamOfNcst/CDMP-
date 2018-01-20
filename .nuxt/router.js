import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1f4db736 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _19a78aa5 = () => import('..\\pages\\appoint.vue' /* webpackChunkName: "pages\\appoint" */).then(m => m.default || m)
const _586d864a = () => import('..\\pages\\rules.vue' /* webpackChunkName: "pages\\rules" */).then(m => m.default || m)
const _740d5884 = () => import('..\\pages\\contact.vue' /* webpackChunkName: "pages\\contact" */).then(m => m.default || m)
const _0825795e = () => import('..\\pages\\backappoint.vue' /* webpackChunkName: "pages\\backappoint" */).then(m => m.default || m)
const _50bd0b33 = () => import('..\\pages\\admin.vue' /* webpackChunkName: "pages\\admin" */).then(m => m.default || m)
const _25be4256 = () => import('..\\pages\\noticecont.vue' /* webpackChunkName: "pages\\noticecont" */).then(m => m.default || m)
const _00d4471e = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages\\about" */).then(m => m.default || m)
const _0c006873 = () => import('..\\pages\\bulletin.vue' /* webpackChunkName: "pages\\bulletin" */).then(m => m.default || m)
const _0f1174b4 = () => import('..\\pages\\details.vue' /* webpackChunkName: "pages\\details" */).then(m => m.default || m)
const _0784d879 = () => import('..\\pages\\lists.vue' /* webpackChunkName: "pages\\lists" */).then(m => m.default || m)
const _621a6c66 = () => import('..\\pages\\pug.vue' /* webpackChunkName: "pages\\pug" */).then(m => m.default || m)



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
			path: "/appoint",
			component: _19a78aa5,
			name: "appoint"
		},
		{
			path: "/rules",
			component: _586d864a,
			name: "rules"
		},
		{
			path: "/contact",
			component: _740d5884,
			name: "contact"
		},
		{
			path: "/backappoint",
			component: _0825795e,
			name: "backappoint"
		},
		{
			path: "/admin",
			component: _50bd0b33,
			name: "admin"
		},
		{
			path: "/noticecont",
			component: _25be4256,
			name: "noticecont"
		},
		{
			path: "/about",
			component: _00d4471e,
			name: "about"
		},
		{
			path: "/bulletin",
			component: _0c006873,
			name: "bulletin"
		},
		{
			path: "/details",
			component: _0f1174b4,
			name: "details"
		},
		{
			path: "/lists",
			component: _0784d879,
			name: "lists"
		},
		{
			path: "/pug",
			component: _621a6c66,
			name: "pug"
		}
    ],
    fallback: false
  })
}
