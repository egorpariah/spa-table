<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'basic-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid lightgray;
  padding: 10px 15px;
  outline: none;

  &:focus {
    border-color: lightgreen;
  }

  ;
}
</style>