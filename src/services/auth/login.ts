import { api } from 'boot/axios';
import { userType } from 'pages/types';

export async function useLogin(user: userType) {
  const { data } = await api.post('login', user);
  return { data };
}
