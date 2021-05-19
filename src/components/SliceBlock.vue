<template>
    <section>
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
            <template v-if="slice.slice_type === 'banner'">
                <banner-block :slice="slice"></banner-block>   <!-- It's not picking up slice-block1 as name -->
            </template>
            <template v-else-if="slice.slice_type === 'information'">
                <information-block :slice="slice"></information-block>
            </template>
            <!-- <template v-else-if"slice.slice_type === 'numbers'">
                <text-slice :slice="slice"></text-slice>
            </template> -->
        </section>
    </section>
</template>

<script>
import BannerBlock from '../components/slices/BannerBlock.vue';
import InformationBlock from '../components/slices/InformationBlock.vue';

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    BannerBlock,
    InformationBlock,
  },
}
</script>
