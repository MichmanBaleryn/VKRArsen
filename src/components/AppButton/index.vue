<script setup>
const props = defineProps({
  text: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
});
</script>

<template>
  <router-link :to="link" class="button">{{ text }}</router-link>
</template>
<style>
@import url("./index.scss");
</style>
