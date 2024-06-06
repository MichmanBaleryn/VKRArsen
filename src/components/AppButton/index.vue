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
  sideIsRight: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <router-link
    :to="link"
    class="button"
    :class="{ 'button-left': !sideIsRight }"
    >{{ text }}</router-link
  >
</template>
<style>
@import url("./index.scss");
</style>
