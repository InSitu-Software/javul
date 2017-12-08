<docs>
  Joho
</docs>

<template>
  <div>
    <label>{{ value ? 'Jeah' : 'noo...' }}</label>
    <input type="checkbox" ref="checkbox" :checked="value ? 'checked' : ''" @input="update()">
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
        type: String
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
        console.log(this.$refs.checkbox.checked)
        this.$emit('input', this.$refs.checkbox.checked)
      }
    }
  }
</script>

<docs>
  Mal sehen ob das klappt
</docs>
