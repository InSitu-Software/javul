<template>
  <div>
    <label>{{ label }}</label>
    <input ref="textfield" :value="value" @input="update()">
  </div>
</template>

<script>
  export default {
    name: 'textfield',
    props: {
      /**
       * @model
       * @desc Der Text halt
       */
      value: {
        type: String,
        default: ''
      },
      /**
       * Label
       */
      label: {
        type: String,
        default: ''
      }
    },

    methods: {
      update () {
        this.$emit('input', this.$refs.textfield.value)
      }
    }
  }
</script>

<docs>
  Mal sehen ob das klappt

  ```js
  new Vue({
    data(){
      return {
        text: 'Change me'
      }
    },
    template: `
    <div>
      <input v-model="text" />
      <label>{{text}}</label>
    </div>`
  })
  ```
</docs>
