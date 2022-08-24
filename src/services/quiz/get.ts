import { api } from 'boot/axios';

export async function getUserQuizzes() {
  const { data } = await api.get('user-quizzes');
  return { data };
}
