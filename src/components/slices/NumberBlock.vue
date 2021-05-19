<template>
  <div class='number'>
      <prismic-image :field="img"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'number-block',
}
</script>

<style scoped lang="scss">

</style>
