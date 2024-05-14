import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
        path: "/",
        name: "Students",
        component: () => import("../src/components/Students.vue"),
    },
    {
        path: "/student/:id",
        name: "Student",
        component: () => import("../src/components/Student.vue"),
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;