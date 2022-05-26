<template>
  <section class="pluses q-pa-xl">
    <div class="row q-mb-xl">
      <div class="col-sm-6 flex justify-center">
        <img class="pluses__img" src="../../assets/img/index/1.png" alt="" />
      </div>
      <div class="col-sm-6 flex justify-center">
        <standard-text-block :dataText="dataText"></standard-text-block>
      </div>
    </div>
    <div class="row q-mb-xl">
      <div class="col-sm-6 flex justify-center">
        <standard-text-block :dataText="dataText2"></standard-text-block>
      </div>
      <div class="col-sm-6 flex justify-center">
        <img class="pluses__img" src="../../assets/img/index/2.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import StandardTextBlock from 'src/components/text/StandardTextBlock.vue';
import { reactive, ref } from 'vue';
import type { propsForStandardText } from 'components/text/models';

const dataText = ref<propsForStandardText>({
  preview: 'We’re SEO & Marketing Agency',
  header: 'Building an effective conversion strategy',
  description:
    'A great marketing landing page plays a major role to increase conversion\n' +
    '      rates in order to reach your marketing or business growth goals. It helps\n' +
    '      you to Introduce your digital campaign to visitors in a more professional\n' +
    '      way.',
  pluses: [
    { id: 1, text: 'cftgyvhbj tfvygbhu' },
    { id: 2, text: 'cftgyvhbj tfvygbhu' },
    { id: 3, text: 'cftgyvhbj tfvygbhu' },
  ],
});

const dataText2 = reactive<propsForStandardText>({
  preview: 'We’re SEO & Marketing Agency',
  header: 'Building an effective conversion strategy',
  description:
    'A great marketing landing page plays a major role to increase conversion\n' +
    '      rates in order to reach your marketing or business growth goals. It helps\n' +
    '      you to Introduce your digital campaign to visitors in a more professional\n' +
    '      way.',
  statistics: [
    { id: 1, icon: 'cloud_download', number: 99, text: 'cftgyvhbj' },
    { id: 2, icon: 'person', number: 99, text: 'cftgyvhbj' },
  ],
});
</script>

<style lang="scss" scoped>
.pluses {
  &__img {
    width: 90%;
    object-fit: contain;
  }
}
</style>
