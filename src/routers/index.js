import BoardPage from "@/components/board/BoardPage.vue";
import CommentComponent from "@/components/comment/CommentList.vue";
import LoginPage from "@/components/login/LoginPage.vue";
import SignUpPage from "@/components/signup/SignUpPage.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/board",
    name: "Board",
    component: BoardPage,
  },
  {
    path: "/comment",
    name: "Comment",
    component: CommentComponent,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUpPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
