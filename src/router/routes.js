import Dashboard from '@/views/dashboard.vue';
import Users from '@/views/users.vue';
import LoginPage from '@/views/login.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/',
    redirect: '/dashboard' 
  }
];

export default routes;
