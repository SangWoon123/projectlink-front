import BoardPage from '@/components/board/BoardPage.vue';
import CommentComponent from '@/components/comment/CommentComponent.vue';
import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/board',
        name: 'Board',
        component: BoardPage,
    },
    {
        path: '/comment',
        name: 'Comment',
        component: CommentComponent,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
