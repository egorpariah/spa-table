<template>
  <div class="app">
    <h1 class="app__title">Singe Page Application Table on Vue 3 + Vuex + Axios + Node JS + MySQL</h1>
    <main-table class="app__table" />
  </div>
</template>

<script>
import MainTable from '@/components/MainTable.vue'

export default {
  components: { MainTable },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

button {
  cursor: pointer;
}

.app {
  padding: 40px;

  &__title {
    font-size: 24px;
    margin-bottom: 30px;
  }
}
</style>