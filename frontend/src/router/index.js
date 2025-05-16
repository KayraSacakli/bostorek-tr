import {createRouter,createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue"; 
import ContactView from "@/views/ContactView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import BooksView from "@/views/BooksView.vue"; 
import BookDetailView from "@/views/BookDetailView.vue";



const router = createRouter ({
    history: createWebHistory(),
    routes:[
        {
    path: "/",
    redirect: "/home" 
        },

        {
            path:"/home",
            name:"Home", 
            component: HomeView
        },
        {
            path:"/register",
            name:"Register", 
            component: RegisterView
        },
        {
            path:"/books",
            name:"Books", 
            component: BooksView
        },
        {
            path:"/books/:id",
            name:"book-detail",
            component: BookDetailView
        },
        {
            path:"/contact",
            name:"Contact", 
            component: ContactView
        },
        {
            path:"/login",
            name:"Login", 
            component: LoginView
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: () => import("@/views/NotFoundView.vue"),
}

    ],
    linkActiveClass:'active-link'
});
export default router;
