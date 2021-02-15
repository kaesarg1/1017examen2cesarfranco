import Vue from 'vue';
import VueRouter from 'vue-router';

import Accueil from "../views/Accueil.vue";
import Contact from "../views/Contact.vue";
import Projet from "../views/Projet.vue";

Vue.use(VueRouter)


const routes = [
    {
        path: '/accueil',
        name: 'accueil',
        component: Accueil
    },
    {
        path: '/',
        component: Accueil
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/projets',
        name: 'projets',
        component: Projet
    }
]

const router = new VueRouter({
    routes
})

export default router