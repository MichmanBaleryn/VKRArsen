<script setup>
import { ref } from "vue";
import motherboard from "@/assets/images/mb.jpg";
import cpu from "@/assets/images/cpu.jpg"
import gpu from "@/assets/images/gpu.jpg"
import ram from "@/assets/images/ram.jpg"
import hdd from "@/assets/images/hdd.jpg"
import AppButton from "@/components/AppButton/index.vue";
const components = [
{
    text: "Материнская плата",
    link: "/motherboard",
    img: motherboard,
  },
  {
    text: "Центральный процессор",
    link: "/cpu",
    img:cpu
  },
  {
    text: "Графический процессор",
    link: "/gpu",
    img:gpu
  },
  {
    text: "Память",
    link: "/ram",
    img:ram
  },


  {
    text: "Переферийные устройства",
    link: "/inop",
  },
];
const activeIndexComponent = ref(0);
</script>

<template>
  <main class="model-main">
    <div class="model-main-container">
      <img
        v-for="(component, i) in components"
        :key="i"
        class="model-main-img"
        :class="{ 'model-main-img-active': activeIndexComponent === i }"
        :src="component.img"
        :alt="component.text"
      />

    </div>
  </main>
  <nav class="nav">
    <ul class="nav-ul">
      <li
        class="nav-li"
        v-for="(component, index) in components"
        :key="index"
        @mouseenter="activeIndexComponent = index"
      >
        <router-link :to="component.link"> {{ component.text }}</router-link>
      </li>
    </ul>
  </nav>
  <AppButton text="Назад" link="/" />
</template>
<style>
@import url("./index.scss");
</style>
