<template>
  <div class="QuizStartScreenPage">
    Start screen
    <q-input
      label="title"
      class="full-width q-mb-md"
      filled
      :model-value="quiz.start_screen.title"
      @update:model-value="updateSSTitle($event, quiz.id)"
      @blur="updateStartScreenTitle($event.target.value, quiz.start_screen.id)"
    />
    <q-input
      label="description"
      class="full-width q-mb-md"
      filled
      :model-value="quiz.start_screen.description"
      @update:model-value="updateSSDesc($event, quiz.id)"
      @blur="
        updateStartScreenDescription($event.target.value, quiz.start_screen.id)
      "
    />
    <q-select
      filled
      :model-value="quiz.category.title"
      :options="categories"
      label="Filled"
      class="full-width q-mb-md"
      @update:model-value="updateQuizCategory($event.id, quiz.id)"
    />
    <q-input
      label="source"
      class="full-width q-mb-md"
      filled
      :model-value="quiz.start_screen.source"
      @update:model-value="updateSSSource($event, quiz.id)"
      @blur="updateStartScreenSource($event.target.value, quiz.start_screen.id)"
    />
    <input
      v-if="!quiz.start_screen.image"
      type="file"
      class="full-width q-mb-md"
      @change="onFileChange($event, quiz.start_screen.id)"
    />
    <img
      v-if="quiz.start_screen.image"
      width="200"
      height="200"
      class="q-mb-md"
      :src="url + '/storage/' + quiz.start_screen.image"
      alt=""
    />
    <q-btn
      v-if="quiz.start_screen.image"
      class="bg-red"
      icon="delete"
      @click="deleteImage(quiz.start_screen.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { categoryType, InputFileEvent } from 'pages/types';
import { computed, reactive, ref } from 'vue';
import { useCategories } from 'src/services/category';
import { useStore } from 'src/store';
import { useRoute } from 'vue-router';
import {
  useUpdateQuizCategory,
  useUpdateStartScreenDesc,
  useUpdateStartScreenImage,
  useUpdateStartScreenSource,
  useUpdateStartScreenTitle,
} from 'src/services/quiz/edit';
import { getUserQuizzes } from 'src/services/quiz/get';
import { useDeleteStartScreenImage } from 'src/services/quiz/delete';

const store = useStore();
const route = useRoute();

const url = ref(process.env.URL);
const link = route.path.split('/')[3];
const quiz = computed(() => store.getters['quiz/getCurrentQuiz'](link));
console.log(quiz.value);

const categories: categoryType[] = reactive([]);
// const category = ref(null);

async function getCategories() {
  const { data } = await useCategories();
  // console.log(data);
  data.data.forEach((cat: categoryType): void => {
    let obj: categoryType = {
      id: cat.id,
      label: cat.title,
    };
    categories.push(obj);
  });
}
getCategories();

async function updateQuizCategory(val: number, id: number): Promise<void> {
  const category_id = new FormData();
  category_id.append('category_id', val);
  await useUpdateQuizCategory(id, category_id);
  await getQuizzes();
}

async function updateStartScreenTitle(val: string, id: number) {
  const title = new FormData();
  title.append('title', val);
  await useUpdateStartScreenTitle(id, title);
  await getQuizzes();
}
function updateSSTitle(val: string, id: number): void {
  store.dispatch('quiz/updateSSTitle', [val, id]);
}

async function updateStartScreenDescription(val: string, id: number) {
  console.log(val);
  const description = new FormData();
  description.append('description', val);
  await useUpdateStartScreenDesc(id, description);
  await getQuizzes();
}
function updateSSDesc(val: string, id: number): void {
  store.dispatch('quiz/updateSSDesc', [val, id]);
}

async function updateStartScreenSource(val: string, id: number) {
  console.log(val);
  const source = new FormData();
  source.append('source', val);
  await useUpdateStartScreenSource(id, source);
  await getQuizzes();
}

function updateSSSource(val: string, id: number): void {
  store.dispatch('quiz/updateSSSource', [val, id]);
}

async function onFileChange(e: InputFileEvent, id: number) {
  const file = e.target.files[0];
  // const url = URL.createObjectURL(file);
  // await store.dispatch('quiz/updateQuestionImageFile', [id, file, url, qid]);
  //
  const image = new FormData();
  image.append('image', file);
  await useUpdateStartScreenImage(id, image);
  await getQuizzes();
}

async function deleteImage(id: number): Promise<void> {
  await useDeleteStartScreenImage(id);
  await getQuizzes();
}

async function getQuizzes() {
  const { data } = await getUserQuizzes();
  await store.dispatch('quiz/setQuizzes', data.data);
}
</script>

<style lang="scss" scoped></style>
