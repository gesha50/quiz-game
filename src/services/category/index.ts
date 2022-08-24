import { api } from 'boot/axios';

export async function useCategories() {
  const { data } = await api.get('categories');
  return { data };
}
