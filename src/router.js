import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";
import JoinPage from "@/components/JoinPage.vue";
import HomePage from "@/components/Home.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/Login",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/Join",
        name: "JoinPage",
        component: JoinPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;