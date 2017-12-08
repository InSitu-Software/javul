<template>
  <div class="row-el">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'row'
  }
</script>

<style lang="scss">
  .row-el {
    display: flex;
    width: 100%;
  }
</style>
