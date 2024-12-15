import { createRouter, createWebHistory } from "vue-router";
import ScratchCard from "../components/ScratchCard.vue";
import CardGallery from "../components/CardGallery.vue";
import CountdownGallery from "../components/CountdownGallery.vue";
import GallerySmall from "../components/GallerySmall.vue";

const routes = [
  {
    path: "/",
    component: ScratchCard,
  },
  {
    path: "/gallery",
    component: CardGallery,
  },
  {
    path: "/countdown",
    component: CountdownGallery,
  },
  {
    path: "/gallery-small",
    component: GallerySmall,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
