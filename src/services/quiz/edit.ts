import { api } from 'boot/axios';

export async function useUpdateQuestionTitle(id: number, val: string) {
  const { data } = await api.post(`questions/${id}/update-title`, val);
  return { data };
}

export async function useUpdateQuestionImage(
  id: number,
  file: HTMLImageElement
) {
  const { data } = await api.post(`questions/${id}/update-image`, file);
  return { data };
}

export async function useUpdateQuestionCorrectAnswer(id: number, val: number) {
  const { data } = await api.post(`questions/${id}/update-correct_answer`, val);
  return { data };
}

export async function useUpdateAnswerTitle(id: number, val: number) {
  const { data } = await api.post(`answers/${id}/update-title`, val);
  console.log(data);
  return { data };
}

export async function useUpdateQuestionBonus(id: number, val: number) {
  const { data } = await api.post(`questions/${id}/update-bonus`, val);
  console.log(data);
  return { data };
}

export async function useUpdateQuestionTime(id: number, val: number) {
  const { data } = await api.post(`questions/${id}/update-time`, val);
  console.log(data);
  return { data };
}

export async function useUpdateStartScreenImage(id: number, file: number) {
  const { data } = await api.post(`start-screens/${id}/update-image`, file);
  console.log(data);
  return { data };
}

export async function useUpdateQuizCategory(id: number, val: number) {
  const { data } = await api.post(`quizzes/${id}/update-category`, val);
  console.log(data);
  return { data };
}

export async function useUpdateStartScreenTitle(id: number, val: number) {
  const { data } = await api.post(`start-screens/${id}/update-title`, val);
  console.log(data);
  return { data };
}

export async function useUpdateStartScreenDesc(id: number, val: number) {
  const { data } = await api.post(
    `start-screens/${id}/update-description`,
    val
  );
  console.log(data);
  return { data };
}

export async function useUpdateStartScreenSource(id: number, val: number) {
  const { data } = await api.post(`start-screens/${id}/update-source`, val);
  console.log(data);
  return { data };
}

export async function useUpdateQuizIsVisible(id: number, val: number) {
  const { data } = await api.post(`quizzes/${id}/update-is_visible`, val);
  console.log(data);
  return { data };
}
