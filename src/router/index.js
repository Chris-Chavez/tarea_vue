import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DatoRandom from '../views/DatoRandom.vue'
import Detalles from '../views/Detalles.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/datorandom',
    name: 'DatoRandom',
    component: DatoRandom
  },
  {
    path: '/detalle/:id',
    name: 'Detalles',
    component: Detalles
  },
]

const router = new VueRouter({
  routes
})

export default router
