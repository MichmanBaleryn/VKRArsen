<script setup>
import { onBeforeMount, ref } from "vue";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import AppButton from "@/components/AppButton/index.vue";
const token = cookies.get("jwt");
const email = ref("");
const score = ref();
onBeforeMount(async () => {
  const response = await fetch("http://localhost:5000/api/user/profile", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const responseResult = await fetch("http://localhost:5000/api/test/check", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const resResult = await responseResult.json();
  score.value = resResult.score;
  const res = await response.json();
  email.value = res.email;
});
const questions = ref([
  {
    question: "2+2=",
    answers: [
      {
        text: "2",
      },
      {
        text: "4",
      },
    ],
    isSelect: "",
    isCorrect: "4",
  },
  {
    question: "Как называется устройство, которое управляет компьютером",
    answers: [
      {
        text: "Процессор",
      },
      {
        text: "Жёсткий диск",
      },
      {
        text: "Микрофон",
      },
    ],
    isSelect: "",
    isCorrect: "Процессор",
  },
]);
async function sendForm() {
  let total = 0;
  questions.value.forEach((question) => {
    if (question.isSelect === question.isCorrect) total++;
  });
  const percent = Math.ceil((total / questions.value.length) * 100);
  await fetch("http://localhost:5000/api/test/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      score: percent.toString(),
    }),
  });
  score.value = percent;
}
function logout() {
  cookies.remove("jwt");
}
</script>

<template>
  <div class="form" v-if="typeof score !== 'undefined'">
    <h1>Вы прошли тест <br />на {{ score }}%</h1>
  </div>
  <form @submit.prevent="sendForm" class="form" v-else>
    <h1>
      Тестирование <br />
      {{ email }}
    </h1>

    <div class="form-question" v-for="(question, i) in questions" :key="i">
      <p class="form-question-p">{{ question.question }}</p>

      <div
        class="form-question-variant"
        v-for="(answer, index) in question.answers"
        :key="index"
      >
        <input
          class="form-question-variant-radio"
          type="radio"
          :value="answer.text"
          v-model="question.isSelect"
          :id="i * 10 + index"
        />
        <label :for="i * 10 + index">{{ answer.text }}</label>
      </div>
    </div>

    <button class="form-btn" type="submit">Отправить</button>
  </form>
  <AppButton text="Назад" link="/" />
  <AppButton text="Выйти из профиля" link="/" @click="logout" />
</template>
<style>
@import url("./index.scss");
</style>
