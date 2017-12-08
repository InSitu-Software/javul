<template>
  <div class="flex-el">
    <slot></slot>
  </div>
</template>

<script>
  /**
   * a flexbox component
   */
  export default {
    name: 'flex'
  }
</script>

<style>
  .flex-el {
    flex: 1 1 20%
  }
</style>


