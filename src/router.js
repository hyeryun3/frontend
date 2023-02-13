import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";
import JoinPage from "@/components/JoinPage.vue";
import HomePage from "@/components/Home.vue";

const routes = [
    {
        path: "/Login",  // TestComponent.vue로 이동할 Path
        name: "LoginPage",  // router name
        component: LoginPage,  // Path로 이동될 Component
    },
    {
        path: "/Join",
        name: "JoinPage",
        component: JoinPage,
    },
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;