<script setup>
import AppButton from "@/components/AppButton/index.vue";

const links = [
  {
    text: "Введение",
    link: "/begin",
  },
  {
    text: "Устройство ПК",
    link: "/pc-model",
  },
  {
    text: "Сборка ПК",
    link: "/pc-build",
  },
];
</script>
<template>
  <main class="main">
    <h1 class="main__title">Устройство компьютера для 7 классов</h1>
    <ul class="main__list">
      <li class="main__list-item" v-for="(item, index) in links" :key="index">
        <router-link :to="item.link" class="main__list-item-link">
          {{ item.text }}
        </router-link>
      </li>
    </ul>
    <AppButton
      text="Войти и пройти тест"
      link="/test"
      :side-horizontal="'bottom'"
      :side-vertical="'left'"
    />
  </main>
</template>
<style>
@import "./index.scss";
</style>
