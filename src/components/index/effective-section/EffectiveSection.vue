<template>
  <section class="effective q-px-lg">
    <q-card class="row q-pa-xl">
      <div class="effective__text col-sm-6">
        <standard-text-block :data-text="dataText"></standard-text-block>
      </div>
      <div class="col-sm-6 effective__reasons">
        <effective-reasons></effective-reasons>
      </div>
    </q-card>
  </section>
</template>

<script setup lang="ts">
import StandardTextBlock from 'src/components/text/StandardTextBlock.vue';
import EffectiveReasons from 'src/components/index/effective-section/EffectiveReasons.vue';
import { ref } from 'vue';
import type { propsForStandardText } from 'components/text/models';

const dataText = ref<propsForStandardText>({
  preview: 'We’re SEO & Marketing Agency',
  header: 'Building an effective conversion strategy',
  description:
    'A great marketing landing page plays a major role to increase conversion\n' +
    '      rates in order to reach your marketing or business growth goals. It helps\n' +
    '      you to Introduce your digital campaign to visitors in a more professional\n' +
    '      way.',
});
</script>

<style lang="scss" scoped>
@import '../../../css/app';
.effective {
  width: 80%;
  margin: -140px auto 0;
}
</style>
