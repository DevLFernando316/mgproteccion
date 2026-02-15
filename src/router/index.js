import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import WhyUs from "../views/WhyUs.vue";
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Inicio - MG Protección Laboral" },
  },
  {
    path: "/nosotros",
    name: "About",
    component: About,
    meta: { title: "Quiénes Somos - MG Protección Laboral" },
  },
  {
    path: "/servicios",
    name: "Services",
    component: Services,
    meta: { title: "Servicios - MG Protección Laboral" },
  },
  {
    path: "/por-que-elegirnos",
    name: "WhyUs",
    component: WhyUs,
    meta: { title: "Por Qué Elegirnos - MG Protección Laboral" },
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:slug",
    name: "BlogPost",
    component: BlogPost,
  },
  {
    path: "/contacto",
    name: "Contact",
    component: Contact,
    meta: { title: "Contacto - MG Protección Laboral" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "MG Protección Laboral";
  next();
});

export default router;
