import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import PostsView from '../views/PostsView.vue'
import PostDetail from '../views/PostDetail.vue'



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
]


// Create the router instance and pass the 'routes' Options. 
const router = createRouter({
  // Provide the history implementation to use 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export default router
