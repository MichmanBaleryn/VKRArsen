<script setup>
import AppButton from "@/components/AppButton/index.vue"
</script>

<template>
  <main>
    <h1>Устройство компьютера</h1>
    <div class="wrapper">
      <h2 class="wrapper-title">Вводная часть</h2>
      <p class="wrapper-text">Данные — это записанная (зафиксированная) информация.</p>
    </div>
    <AppButton text="Продолжить" link="/pc-model"/>
  </main>
</template>
<style>
@import url("./index.scss");
</style>
