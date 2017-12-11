<template>
  <div>
    <label>{{ value ? 'Jeah' : 'noo...' }}</label>
    <input type="checkbox" ref="checkbox1" :checked="value ? 'checked' : ''" @change="update()">
  </div>
</template>

<script>
  export default {
    name: 'checkbox',
    props: {
      /**
       * @model
       * The Value of the checkbox
       */
      value: {
        type: Boolean
      },
      /**
       * the label
       */
      label: {
        type: String
      }
    },

    methods: {
      update () {
        console.log(this.$refs.checkbox1.checked)
        this.$emit('input', this.$refs.checkbox1.checked)
      }
    }
  }
</script>

<style></style>

<docs>
  Mal sehen ob das klappt
  ```js
  new Vue({
    data(){
      return {
        selected: true
      }
    },
    template: `
      <div>
        <checkbox v-model="selected" />
      </div>`
  })
  ```
</docs>
