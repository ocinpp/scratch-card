import { createRouter, createWebHistory } from "vue-router";
import ScratchCard from "../components/ScratchCard.vue";
import CardGallery from "../components/CardGallery.vue";

const routes = [
  {
    path: "/",
    component: ScratchCard,
  },
  {
    path: "/gallery",
    component: CardGallery,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
