import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Edit from '@/components/edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/Test',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/edit', name: 'edit', component: Edit, props: true }
  ]
})
