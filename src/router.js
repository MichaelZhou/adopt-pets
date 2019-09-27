import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue' // Home and about are both views, these are the pages of the applications that are connected to the router
import Cats from './views/Cats.vue'
import Dogs from './views/Dogs.vue'
import Pet from './views/Pet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cats',
      name: 'cats',
      component: Cats
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    },
    {
      path: '/pets/:id', //dynamic route variable preceded by a colon
      name: 'pet',
      component: Pet
    }
  ]
})
