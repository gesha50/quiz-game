import { api } from 'boot/axios';

export async function useGetQuizzes() {
  const { data } = await api.get('quizzes');
  return { data };
}

export async function getUserQuizzes() {
  const { data } = await api.get('user-quizzes');
  return { data };
}

export async function useGetResult(id: number) {
  const { data } = await api.get('results/' + id);
  return { data };
}
