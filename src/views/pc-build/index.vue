<script setup>
import AppButton from "@/components/AppButton/index.vue";
import cpu from "@/assets/images/build/test.png";
import { ref } from "vue";
const pages = [
  {
    texts: ["123", "345"],
    caption: "Осторожно",
    imgs: [cpu],
  },
  {
    texts: ["111", "6666"],
    caption: "Рекомендовано",
    imgs: [cpu, cpu],
  },
  {
    texts: ["111", "6666"],
    caption: "Рекомендовано",
    imgs: [cpu, cpu, cpu],
  },
];
const activePage = ref(0);
function nextPage() {
  activePage.value++;
}
function prevPage() {
  activePage.value--;
}
</script>
<template>
  <h1>Сборка Персонального компьютера</h1>
  <template v-for="(page, index) in pages" :key="index">
    <div class="wrapper" v-if="index === activePage">
      <div class="wrapper__content">
        <div class="wrapper__texts">
          <p
            v-for="(text, i) in page.texts"
            :key="i"
            class="wrapper__texts-item"
          >
            {{ text }}
          </p>
        </div>
        <div class="wrapper__caption">
          {{ page.caption }}
        </div>
      </div>

      <div class="wrapper__imgs">
        <img
          v-for="(item, j) in page.imgs"
          :key="j"
          :src="item"
          class="wrapper__imgs-item"
        />
      </div>
      <div class="wrapper__buttons">
        <button
          class="wrapper__buttons-item"
          @click="prevPage"
          v-if="activePage !== 0"
        >
          Предыдущий шаг
        </button>
        <button
          class="wrapper__buttons-item"
          @click="nextPage"
          v-if="activePage !== pages.length - 1"
        >
          Следующий шаг
        </button>
      </div>
    </div>
  </template>

  <AppButton text="Назад" link="/" />
</template>
<style>
@import "./index.scss";
</style>
