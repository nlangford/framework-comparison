import Vue from 'vue'
import Router from 'vue-router'
import ToDoLists from '@/components/ToDoLists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDoLists',
      component: ToDoLists
    }
  ]
})
