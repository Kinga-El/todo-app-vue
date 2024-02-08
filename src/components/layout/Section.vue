<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<template>
  <section class="Section">
    <header class="Section__header">
      <h2 class="Section__title">{{ title }}</h2>
      <slot name="action" />
    </header>
    <slot />
  </section>
</template>

<style scoped lang="scss">
.Section {
  background-color: rgb(243, 243, 243);
  margin-top: $gutterLarge;
  padding: $gutterExtraLarge;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $gutterMedium;
    border-bottom: 1px solid #ccc;
  }

  &__title {
    font-size: 25px;
    color: #046b99;
    padding: $gutterSmall 0;
    margin: 0;
  }
}
</style>
