import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/', // 사용자가 브라우저 주소창에 기본 주소만 쳤을 때
            name: 'home',
            component: HomeView // HomeView.vue를 화면에 뿌려라!
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: () => import('../views/PortfolioView.vue')
        },
        {
            path: '/services',
            name: 'services',
            component: () => import('../views/ServicesView.vue')
        }
    ],
    // 페이지 이동 시 실행되는 함수
    scrollBehavior(to, from, savedPosition) {
        // 사용자가 '뒤로가기'를 누른 게 아니라면 무조건 최상단(0, 0)으로 이동
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, behavior: 'smooth' };
        }
    }
});

export default router;
