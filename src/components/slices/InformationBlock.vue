<template>
  <div class='information'>
    <div class="left">
      <p>{{ $prismic.richTextAsPlain(slice.primary.informationtextbold) }}</p>
      <p>{{ $prismic.richTextAsPlain(slice.primary.informationaltext) }}</p>
    </div>
    <div class="right">
      <prismic-image :field="img"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'information-block',
  data: function() {
    return {
      img: '',
    }
  },
  created () {
    this.img = this.slice.primary.informationimage
  }
}
</script>

<style scoped lang="scss">

</style>
