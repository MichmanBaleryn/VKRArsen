<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from "vue";
import AppButton from "@/components/AppButton/index.vue";

const confirmPass = ref("");
const isError = ref(false);
const isErrorReg = ref(false);
const email = ref("");
const password = ref("");

async function sendForm() {
  if (confirmPass.value !== password.value) {
    isError.value = true;
  } else {
    isError.value = false;
  }
  if (isError.value) {
    return;
  }

  const resUser = await fetch("http://localhost:5000/api/user/registration", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });
  const user = await resUser.json();
  if (user.message) {
    isErrorReg.value = true;
  } else {
    router.push("/auth");
  }
}
</script>

<template>
  <form @submit.prevent="sendForm" class="form">
    <h1>Регистрация</h1>
    <h2 class="form-error" v-if="isErrorReg">Ошибка при регистрации</h2>
    <label class="form-label">Почта</label>
    <input class="form-input" type="text" v-model="email" />
    <label class="form-label">Пароль</label>
    <input
      class="form-input"
      :style="{ border: isError ? '2px solid red' : '' }"
      type="password"
      v-model="password"
    />
    <label class="form-label">Подтверждение пароля</label>
    <input
      class="form-input"
      :style="{ border: isError ? '2px solid red' : '' }"
      type="password"
      v-model="confirmPass"
    />
    <button class="form-btn" type="submit">Зарегистрироваться</button>
    <router-link to="/auth">Вернуться ко входу</router-link>
  </form>
  <AppButton text="Назад" link="/" />
</template>
<style>
@import url("./index.scss");
</style>
