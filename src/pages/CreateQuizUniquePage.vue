<template>
  <div class="CreateQuizUniquePage row" style="height: 100vh">
    <div class="col-2 bg-amber-1">
      <q-tabs v-model="activeTab" vertical class="text-teal">
        <q-tab
          v-for="(question, i) in quiz.questions"
          :key="question.id"
          :name="question.id"
          icon="done"
          :label="'#' + inc(i)"
        />
        <div>
          <div
            @click="addQuestion"
            class="bg-brown-3 q-pa-md cursor-pointer text-center"
          >
            add question
          </div>
          <div
            @click="endQuiz"
            class="bg-red q-pa-md cursor-pointer text-white text-center"
          >
            end quiz
          </div>
        </div>
      </q-tabs>
    </div>
    <div class="col-10 bg-blue-grey-1">
      <q-tab-panels
        v-model="activeTab"
        animated
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel
          v-for="question in quiz.questions"
          :key="question.id"
          :name="question.id"
        >
          <div class="column full-height content-center">
            <div class="col-1 full-width">
              <q-input
                label="Question..."
                class="full-width q-mb-md"
                filled
                :model-value="question.title"
                @update:model-value="updateQuestionTitle($event, question)"
                @blur="sendToServerQuestion($event.target.value, question.id)"
              />
            </div>
            <div class="col-4 relative-position">
              <input
                v-if="!question.image"
                type="file"
                class="full-width q-mb-md"
                @change="onFileChange($event, question.id)"
              />
              <img
                v-if="question.image"
                class="full-width q-mb-md full-height"
                style="object-fit: contain"
                :src="url + '/storage/' + question.image"
                alt=""
              />
              <q-btn
                v-if="question.image"
                @click="deleteImage(quiz.id, question.id)"
                icon="delete"
                class="absolute-top-right bg-red"
                color="white"
              />
            </div>
            <div class="col-4">
              <div class="row">
                <div
                  v-for="answer in question.answers"
                  :key="answer.id"
                  class="col-6"
                >
                  <q-list>
                    <q-item tag="label">
                      <q-item-section avatar>
                        <q-radio
                          :model-value="question.correct_answer"
                          :val="answer.id"
                          color="orange"
                          @update:model-value="
                            updateCorrectAnswer(
                              $event,
                              question.id,
                              question.quiz_id
                            )
                          "
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-input
                          label="answer..."
                          class="full-width q-mb-md"
                          :model-value="answer.title"
                          @update:model-value="
                            updateAnswer(
                              $event,
                              question.id,
                              answer.id,
                              question.quiz_id
                            )
                          "
                          @blur="
                            sendToServerAnswer($event.target.value, answer.id)
                          "
                        />
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
            </div>
            <div class="col-1 flex justify-between">
              <q-input
                filled
                :model-value="question.bonus"
                label="bonus"
                @update:model-value="updateQuestionBonus($event, question)"
                @blur="
                  sendToServerQuestionBonus($event.target.value, question.id)
                "
              />
              <q-input
                label="Time to answer"
                filled
                :model-value="question.time_to_answer"
                mask="fulltime"
                :rules="['fulltime']"
                @update:model-value="updateQuestionTime($event, question)"
                @blur="
                  sendToServerQuestionTime($event.target.value, question.id)
                "
              />
            </div>
            <div class="col-1">
              <q-btn
                @click="deleteQuestion(question.id)"
                color="red"
                label="delete question"
              />
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { InputFileEvent } from 'pages/types';
import { useStore } from 'src/store';
import { QuestionsInterface } from 'src/store/quiz/state';
import { useRoute, useRouter } from 'vue-router';
import { useMakeAnswer, useMakeQuestion } from 'src/services/quiz/create';
import { getUserQuizzes } from 'src/services/quiz/get';
import {
  useUpdateAnswerTitle,
  useUpdateQuestionBonus,
  useUpdateQuestionCorrectAnswer,
  useUpdateQuestionImage,
  useUpdateQuestionTime,
  useUpdateQuestionTitle,
} from 'src/services/quiz/edit';
import {
  useDeleteQuestionImage,
  useDeleteQuestion,
} from 'src/services/quiz/delete';

const store = useStore();
const route = useRoute();
const router = useRouter();

const url = ref(process.env.URL);
const link = route.path.split('/')[3];
const quiz = computed(() => store.getters['quiz/getCurrentQuiz'](link));
console.log(quiz.value.questions);
const activeTab = ref(quiz.value.questions[0].id);

async function onFileChange(e: InputFileEvent, id: number) {
  const file = e.target.files[0];
  const image = new FormData();
  image.append('image', file);
  await useUpdateQuestionImage(id, image);
  await getQuizzes();
}

async function deleteQuestion(id: number) {
  await useDeleteQuestion(id);
  await getQuizzes();
  activeTab.value = quiz.value.questions[0].id;
}

async function deleteImage(id: number, qid: number): Promise<void> {
  await store.dispatch('quiz/deleteImage', [id, qid]);
  await useDeleteQuestionImage(qid);
  await getQuizzes();
}

function updateQuestionTitle(val: string, question: QuestionsInterface): void {
  store.dispatch('quiz/updateQuestionTitle', [
    val,
    question.id,
    question.quiz_id,
  ]);
}

function updateQuestionBonus(val: string, question: QuestionsInterface): void {
  store.dispatch('quiz/updateQuestionBonus', [
    val,
    question.id,
    question.quiz_id,
  ]);
}

function updateQuestionTime(val: string, question: QuestionsInterface): void {
  store.dispatch('quiz/updateQuestionTime', [
    val,
    question.id,
    question.quiz_id,
  ]);
}

async function sendToServerQuestion(val: string, id: number) {
  const questionTitle = new FormData();
  questionTitle.append('title', val);
  await useUpdateQuestionTitle(id, questionTitle);
}

async function updateCorrectAnswer(val: number, qid: number): Promise<void> {
  const questionCorrectAnswer = new FormData();
  questionCorrectAnswer.append('correct_answer', val);
  await useUpdateQuestionCorrectAnswer(qid, questionCorrectAnswer);
  await getQuizzes();
}

function updateAnswer(
  val: string,
  qid: number,
  aid: number,
  quizID: number
): void {
  store.dispatch('quiz/updateAnswer', [qid, val, aid, quizID]);
}

async function sendToServerAnswer(val: string, id: number) {
  const answerTitle = new FormData();
  answerTitle.append('title', val);
  await useUpdateAnswerTitle(id, answerTitle);
  await getQuizzes();
}

async function sendToServerQuestionBonus(val: string, id: number) {
  const questionBonus = new FormData();
  questionBonus.append('bonus', val);
  await useUpdateQuestionBonus(id, questionBonus);
  await getQuizzes();
}

async function sendToServerQuestionTime(val: string, id: number) {
  const questionTime = new FormData();
  questionTime.append('time_to_answer', val);
  await useUpdateQuestionTime(id, questionTime);
  await getQuizzes();
}

async function addQuestion() {
  let QuestionFormData = new FormData();
  QuestionFormData.append('title', '');
  QuestionFormData.append('description', '');
  QuestionFormData.append('quiz_id', quiz.value.id);
  QuestionFormData.append('bonus', 100);
  QuestionFormData.append('time_to_answer', '00:01:00');
  let { data } = await useMakeQuestion(QuestionFormData);
  let AnswerFormData = new FormData();
  AnswerFormData.append('title', '');
  AnswerFormData.append('is_correct', 0);
  AnswerFormData.append('question_id', data.data[0].id);
  for (let i = 0; i < 4; i++) {
    await useMakeAnswer(AnswerFormData);
  }
  // update data in vuex
  await getQuizzes();
  // change tab to new question
  activeTab.value = data.data[0].id;
}

async function getQuizzes() {
  const { data } = await getUserQuizzes();
  await store.dispatch('quiz/setQuizzes', data.data);
}

function inc(num: number): number {
  return ++num;
}

function endQuiz() {
  console.log('end quiz');
  router.push('/cabinet');
}
</script>

<style lang="scss" scoped>
.q-tab-panels {
  height: 100vh;
}
</style>
