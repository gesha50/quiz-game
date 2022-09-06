import { api } from 'boot/axios';

export async function useDeleteQuestion(id: number) {
  const { data } = await api.delete(`questions/${id}`);
  return { data };
}

export async function useDeleteQuestionImage(id: number) {
  const { data } = await api.delete(`questions/${id}/delete-image`);
  return { data };
}

export async function useDeleteStartScreenImage(id: number) {
  const { data } = await api.delete(`start-screens/${id}/delete-image`);
  return { data };
}
