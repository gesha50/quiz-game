<template>
  <div class="CreateQuizPage flex justify-center content-center">
    <div style="width: 50%">
      <h3>Create Test</h3>
      <q-input
        label="title"
        class="full-width q-mb-md"
        filled
        v-model="startScreen.title"
      />
      <q-input
        label="description"
        class="full-width q-mb-md"
        filled
        v-model="startScreen.description"
      />
      <q-select
        filled
        v-model="category"
        :options="categories"
        label="Filled"
        class="full-width q-mb-md"
      />
      <q-input
        label="source"
        class="full-width q-mb-md"
        filled
        v-model="startScreen.source"
      />
      <input
        v-if="!url"
        type="file"
        class="full-width q-mb-md"
        @change="onFileChange"
      />
      <img v-if="url" class="full-width q-mb-md" :src="url" />
      <q-btn color="blue" label="login" class="q-mr-md" @click="makeQuiz" />
      <q-btn label="reset" @click="reset" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { makeId } from 'src/services/functions/makeId';
import { computed, reactive, ref } from 'vue';
import { useStore } from 'src/store';
import {
  categoryType,
  InputFileEvent,
  quizType,
  startScreenType,
} from 'pages/types';
import { useCategories } from 'src/services/category';
import {
  useMakeAnswer,
  useMakeQuestion,
  useMakeQuiz,
  useMakeStartScreen,
} from 'src/services/quiz/create';
import { useRouter } from 'vue-router';

const $store = useStore();
const router = useRouter();

const categories: categoryType[] = reactive([]);
const category = ref(null);

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

const user_id = computed(() => $store.getters['settings/userId']);
const quiz: quizType = reactive({
  link: '',
  is_visible: 1,
  category_id: null,
  user_id: user_id.value,
  image: null,
});

const startScreen: startScreenType = reactive({
  title: '',
  description: '',
  source: '',
  quiz_id: null,
  image: null,
});

async function makeQuiz() {
  quiz.link = makeId(20);
  quiz.category_id = category.value?.id;
  let QuizFormData = new FormData();
  QuizFormData.append('link', quiz.link);
  QuizFormData.append('is_visible', quiz.is_visible);
  QuizFormData.append('category_id', quiz.category_id);
  QuizFormData.append('user_id', user_id.value);
  QuizFormData.append('image', quiz.image);
  // make quiz
  console.log(quiz);
  const quizFromServer = await useMakeQuiz(QuizFormData);
  // make first screen
  startScreen.quiz_id = quizFromServer.data.data.id;
  let StartScreenFormData = new FormData();
  StartScreenFormData.append('title', startScreen.title);
  StartScreenFormData.append('description', startScreen.description);
  StartScreenFormData.append('quiz_id', startScreen.quiz_id);
  StartScreenFormData.append('source', startScreen.source);
  StartScreenFormData.append('image', startScreen.image);

  const startScreenFromServer = await useMakeStartScreen(StartScreenFormData);
  console.log(startScreenFromServer.data);

  let QuestionFormData = new FormData();
  QuestionFormData.append('title', 'question 1');
  QuestionFormData.append('description', 'description');
  QuestionFormData.append('quiz_id', startScreen.quiz_id);
  QuestionFormData.append('bonus', 1);
  QuestionFormData.append('time_to_answer', '00:01:00');
  const QuestionFromServer = await useMakeQuestion(QuestionFormData);
  console.log(QuestionFromServer.data.data[0].id);
  let AnswerFormData = new FormData();
  AnswerFormData.append('title', '-');
  AnswerFormData.append('is_correct', 0);
  AnswerFormData.append('question_id', QuestionFromServer.data.data[0].id);
  for (let i = 0; i < 4; i++) {
    await useMakeAnswer(AnswerFormData);
  }
  await router.push({ path: `/create/quiz/${quizFromServer.data.data.link}` });
}

const url = ref('');
function onFileChange(e: InputFileEvent) {
  startScreen.image = e.target.files[0];
  url.value = URL.createObjectURL(startScreen.image);
}

function reset(): void {
  quiz.category_id = null;
  startScreen.title = '';
  startScreen.source = '';
  startScreen.description = '';
  url.value = '';
}
</script>

<style lang="scss" scoped></style>
