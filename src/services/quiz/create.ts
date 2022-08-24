import { api } from 'boot/axios';
import { quizType, startScreenType } from 'pages/types';
import {
  AnswersInterface,
  QuestionsInterface,
  ResultDetailInterface,
  ResultInterface,
} from 'src/store/quiz/state';

export async function useMakeQuiz(quiz: quizType) {
  const { data } = await api.post('quizzes', quiz);
  return { data };
}

export async function useMakeStartScreen(startScreen: startScreenType) {
  const { data } = await api.post('start-screens', startScreen);
  return { data };
}

export async function useMakeQuestion(question: QuestionsInterface) {
  const { data } = await api.post('questions', question);
  return { data };
}

export async function useMakeAnswer(answer: AnswersInterface) {
  const { data } = await api.post('answers', answer);
  return { data };
}

export async function useCreateResult(result: ResultInterface) {
  const { data } = await api.post('results', result);
  return { data };
}

export async function useCreateResultDetail(result: ResultDetailInterface) {
  const { data } = await api.post('result-details', result);
  return { data };
}
