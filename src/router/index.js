import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Headphones from '../views/Headphones.vue';
import Earphones from '../views/Earphones.vue';
import Speakers from '../views/Speakers.vue';
import Product from '../views/Product.vue';
import CheckOut from '../views/CheckOut.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/headphones',
    name: 'Headphones',
    component: Headphones,
    meta: {
      title: "Headphones",
    },
    
  },
  {
    path: '/earphones',
    name: 'Earphones',
    component: Earphones,
    meta: {
      title: "Earphones",
    },
    
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: Speakers,
    meta: {
      title: "Speakers",
    },
    
  },
  {
    path: '/product/:id?',
    name: 'Product',
    component: Product,
    meta: {
      title: "Product",
    },
    props: true
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut,
    meta: {
      title: "CheckOut",
    },
    
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
