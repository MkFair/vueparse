import { createRouter, createWebHistory } from 'vue-router'
import Records from '../views/Records.vue'
import RecordView from '../views/RecordView.vue'

const routes = [
  {
    path: '/',
    name: 'Records',
    component: Records
  },
  {
    path: '/record/:id',
    name: 'RecordView',
    component: RecordView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
