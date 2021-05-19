<template>
  <div class='banner'>
      <prismic-image :field="img"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'banner-block',
  data: function() {
    return {
      img: '',
    }
  },
  created () {
    this.img = this.slice.primary.bannerimg
  }
}
</script>

<style scoped lang="scss">

</style>
