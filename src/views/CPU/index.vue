<script setup>
import AppButton from "@/components/AppButton/index.vue";
import { ref } from "vue";
const activePage = ref(0);
const pages = [
  {
    title: "Процессор",
    content: [
      " Процессор — это устройство, которое отвечает за обработку информации и является «мозгом» вычислительного устройства (смартфона, компьютера, планшета, сервера и т.д.).",
      "Он состоит из трёх частей:",
      "1.	Ядро процессора — выполняет расшифровку, чтение, отправку инструкций другим элементам или принимает инструкции от них.",
      "2.	Запоминающее устройство — небольшая память процессора, в которой хранится информация о текущих командах и промежуточных результатах. Она состоит из кеша и регистров.",
      "3.	Шины — каналы передачи команд внутри процессора.",
    ],
  },
  {
    title: "Процессор",
    content: [
      "Также, процессор имеет основные характеристики:",
      "•	Тактовая частота — количество обрабатываемых операций (тактов) в секунду. Измеряется в мегагерцах (МГц) и обозначает, что, например, процессор с частотой 1 мегагерц обрабатывает 1 миллион операций в секунду.",
      "•	Число потоков — количество потоков информации, которое может обрабатывать одно ядро процессора.",
      "•	Разрядность процессора — количество бит информации, которые процессор может обработать за один такт (операцию).",
    ],
  },
];
function prevPage() {
  activePage.value--;
}
function nextPage() {
  activePage.value++;
}
import cpuIntel from "@/assets/images/cpu/cpuintel.png";
import cpuAmd from "@/assets/images/cpu/cpuamd.png";
import intelBack from "@/assets/images/cpu/intelback.jpg";
import amdBack from "@/assets/images/cpu/amdback.jpg";
import cpuChip from "@/assets/images/cpu/cpuchip.jpg";


const activeImage = ref(0);
const images = [
  { img: cpuIntel, title: "Процессор Intel" },
  { img: cpuAmd, title: "Процессор AMD" },
  { img: intelBack, title: "Intel вид сзади" },
  { img: amdBack, title: "AMD вид сзади" },
  { img: cpuChip, title: "Процессор без защитной крышки" },

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
