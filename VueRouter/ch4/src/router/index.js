import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import PostsView from '../views/PostsView.vue'
import PostDetail from '../views/PostDetail.vue'
import PageNot from '../views/PageNot.vue'



// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

// export default router


// Define routes, each route should map to a components
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsView
  },
  {
    // dynamic segments start with a colon
    path: '/posts/:id',
    name: 'postdetail',
    component: PostDetail
  },
  {
    // dynamic segments start with a colon
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: PageNot
  },
  // Redirection ............
  // {
  //   path: '/home',
  //   redirect: '/'
  // },
  // Redirection 
  // {
  //   path: '/home', redirect: { name: 'home' }
  // },
  // alias ................
  // {
  //   path: '/', component: HomeView, alias: '/home'
  // }
  // this will render the UserList for these 3 URLs Multiple ALiaases
  // - /users
  // - /users/list
  // - /people
  { path: '', component: HomeView, alias: ['/', '/home', '/index'] },
  // { path: '/', component: HomeView, alias: ['/:id', ''] },

  // {
  //   // dynamic segments start with a colon
  //   // /:productName -> matches anything else
  //   //  path: '/posts/:id',
  //   // /:orderId -> matches only numbers
  //   // path: '/posts/:id(\\d+)',
  //   // will match everything and put it under `$route.params.pathMatch`
  //   // path: '/posts/:id(.*)*',
  //   // will match everything and put it under `$route.params.pathMatch`
  //   // path: '/posts/:id(.*)',
  //   // /:chapters -> matches /, /one, /one/two, /one/two/three, etc
  //   // path: '/posts/:id*',
  //   path: '/posts/:id(\\d+)',
  //   name: 'postdetail',
  //   component: PostDetail
  // },

]


// Create the router instance and pass the 'routes' Options. 
const router = createRouter({
  // Provide the history implementation to use 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export default router
