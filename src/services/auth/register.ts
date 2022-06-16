import { api } from 'boot/axios';
import { userType } from 'pages/types';

export async function useRegister(user: userType) {
  const { data } = await api.post('register', user);
  console.log(data);
  return { data };
}
