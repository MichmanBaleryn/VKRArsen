<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import { ref } from "vue";
import AppButton from "@/components/AppButton/index.vue";
const email = ref("");
const password = ref("");

async function sendForm() {
  const response = await fetch("http://localhost:5000/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const res = await response.json();
  cookies.set("jwt", res.token);
  router.push("/test");
}
</script>

<template>
  <form @submit.prevent="sendForm" class="form">
    <h1>Вход в систему</h1>
    <label class="form-label">Почта</label>

    <input class="form-input" type="text" v-model="email" />
    <label class="form-label">Пароль</label>

    <input class="form-input" type="password" v-model="password" />
    <button class="form-btn" type="submit">Отправить</button>
    <router-link to ="/registration">Перейти к регистрации</router-link>
  </form>
  <AppButton text="Назад" link="/" />
</template>
<style>
@import url("./index.scss");
</style>
