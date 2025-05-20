import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@/assets/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons"
library.add(faArrowLeft)
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
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