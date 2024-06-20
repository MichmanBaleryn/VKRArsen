<script setup>
import AppButton from "@/components/AppButton/index.vue";
import { ref } from "vue";
const activePage = ref(0);
const pages = [
  {
    title: "Графический процессор (Видеокарта)",
    content: [
      " Видеокарта (графический адаптер) — это устройство, которое обрабатывает графическую информацию и выводит изображение на монитор. Основная функция видеокарты — преобразование данных из центрального процессора (CPU) в графические изображения. Состоит из графического процессора и видеопамяти. ",
    ],
  },
  {
    title: "Графический процессор (Видеокарта)",
    content: [
      "Все современные видеокарты не ограничиваются простым выводом изображения, они имеют встроенный графический процессор, который может производить дополнительную обработку команд и кода, снимая данную часть задачи с центрального процессора компьютера.",
      "Зачастую видеокарта выполнена в виде отдельной печатной платы и используется в отдельном слоте расширения (AGP, PCI Express) материнской платы. Однако широко распространены и встроенные (интегрированные) в системную плату или процессор видеокарты.",
    ],
  },
];
function prevPage() {
  activePage.value--;
}
function nextPage() {
  activePage.value++;
}
import gpu1060 from "@/assets/images/gpu/gpu1060.jpg";
import gpuSide from "@/assets/images/gpu/gpuside.jpg";
import gpuChip from "@/assets/images/gpu/gpuchip.jpg";
import cpugpu from "@/assets/images/gpu/cpugpu.jpg";


const activeImage = ref(0);
const images = [
  { img: gpu1060, title: "GTX 1060" },
  { img: gpuSide, title: "" },
  { img: gpuChip, title: "Видеокарта без радиатора" },
  { img: cpugpu, title: "Процессор с видеоядром (APU)" },
];
function prevImage() {
  if (activeImage.value === 0) {
    activeImage.value = images.length - 1;
  } else {
    activeImage.value--;
  }
}
function nextImage() {
  if (activeImage.value === images.length - 1) {
    activeImage.value = 0;
  } else {
    activeImage.value++;
  }
}
</script>

<template>
  <div class="wrap">
    <div class="wrap-container">
      <div @click="prevImage" class="wrap-container-arrow">
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25 13L1 13M1 13L13 25M1 13L13 0.999998" stroke="#2C2C2C" />
        </svg>
      </div>
      <div class="wrap-container-content">
        <h2 class="wrap-container-content-h2">
          {{ images[activeImage].title }}
        </h2>
        <img
          class="wrap-container-content-img"
          :src="images[activeImage].img"
        />
      </div>
      <div @click="nextImage" class="wrap-container-arrow">
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25 13L1 13M1 13L13 25M1 13L13 0.999998" stroke="#2C2C2C" />
        </svg>
      </div>
    </div>
    <template v-for="(page, index) in pages" :key="index">
      <div class="wrap-page page" v-if="index === activePage">
        <div>
          <h1 class="page-h1">
            {{ page.title }}
          </h1>
          <p v-for="(paragraph, i) in page.content" :key="i" class="page-p">
            {{ paragraph }}
          </p>
        </div>
        <div class="page-buttons">
          <div>
            <button
              class="page-buttons-item"
              @click="prevPage"
              v-if="activePage !== 0"
            >
              Назад
            </button>
          </div>
          <div>
            <button
              class="page-buttons-item"
              @click="nextPage"
              v-if="activePage !== pages.length - 1"
            >
              Далее
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>

  <AppButton text="Назад" link="/pc-model" />
</template>
<style scoped>
@import url("./index.scss");
</style>
