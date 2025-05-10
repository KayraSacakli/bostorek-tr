import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const app = createApp(App);
app.use(router);
app.mount("#app")

/*const app =createApp({
    data() {
        return {
            name: "Arin",

        };
    },
    template: '<h1> Benim adım {{name}} </h1>',
});

app.mount('#app');*/