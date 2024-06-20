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
  sideHorizontal: {
    type: String,
    default: "bottom",
  },
  sideVertical: {
    type: String,
    default: "right",
  },
});
</script>

<template>
  <router-link
    :to="link"
    class="button"
    :class="{
      'button-left': sideVertical === 'left',
      'button-top': sideHorizontal === 'top',
      'button-bottom': sideHorizontal === 'bottom',
      'button-right': sideVertical === 'right',
    }"
    >{{ text }}</router-link
  >
</template>
<style>
@import url("./index.scss");
</style>
