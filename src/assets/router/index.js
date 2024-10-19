import { createRouter, createWebHistory } from 'vue-router';

const routes = [

  { path: '/', 
    name: 'home',
    component: () => import ('../views/Home.vue')
  },
  { path: '/inspections', 
    name: 'inspections', 
    component: () => import ('../views/Inspections.vue') 
},
  { path: '/reports', 
    name: 'reports', 
    component: ()=> import ('../views/Reports.vue')
},
  { path: '/settings', 
    name: 'settings', 
    component: ()=> import ('../views/Settings.vue') 
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;