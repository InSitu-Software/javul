<template>
  <div>
    <label>{{ label }}</label>
    <input ref="checkbox" :value="value" @input="update()">
  </div>
</template>

<script>
  export default {
    name: 'textfield',
    props: ['value', 'label'],

    methods: {
      update () {
        this.$emit('input', this.$refs.checkbox.value)
      }
    }
  }
</script>
