<template>
<div v-if="hasContent" class="topContent">
  <div class="home">
    <h1>
      {{ $prismic.richTextAsPlain(fields.headline) }}
    </h1>
    <h2>
      {{ $prismic.richTextAsPlain(fields.description) }}
    </h2>
    <p class="small-text">
      {{ $prismic.richTextAsPlain(fields.description2) }}
    </p>
    <slice-block :slices="slices"/>
  </div>
</div>
<div v-else class="home">
    <p> This site is empty </p>
  </div>
</template>

<script>
// @ is an alias to /src
import SliceBlock from "@/components/SliceBlock.vue";

export default {
  name: "Home",
  components: {
    SliceBlock
  },
  data () {
    return {
      fields: {
        headline: null,
        description: null,
        description2: null
      },
      slices: [],
      hasContent: false
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle("about")
        .then((document) => {
          if (document) {
            this.fields.headline = document.data.title;
            this.fields.description = document.data.maintext;
            this.fields.description2 = document.data.mainquote;

            this.slices = document.data.body
            this.checkForContent();

          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
    },
    checkForContent(){
      if (
        this.$prismic.richTextAsPlain(this.fields.headline) !== "" ||
        this.$prismic.richTextAsPlain(this.fields.description) !== "" ||
        this.$prismic.richTextAsPlain(this.fields.description2) !== ""
      ) {
        this.hasContent = true;
      }
    },
  },
  created() {
    this.getContent();

  }
};
</script>

<style scoped lang="scss">

</style>
