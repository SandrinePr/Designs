import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home.vue';
import NeonPortfolio from '../views/NeonPortfolio.vue';
import basicPortfolio from '../views/basicPortfolio.vue';
import PortfolioJP from '../views/PortfolioJP.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/NeonPortfolio',
    name: 'NeonPortfolio',
    component: NeonPortfolio
  },
  {
    path: '/basicPortfolio',
    name: 'basicPortfolio',
    component: basicPortfolio
  },
  {
    path: '/PortfolioJP',
    name: 'PortfolioJP',
    component: PortfolioJP
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
