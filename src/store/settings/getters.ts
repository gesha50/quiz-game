import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { SettingsStateInterface } from './state';

const getters: GetterTree<SettingsStateInterface, StateInterface> = {
  isLogin(state: SettingsStateInterface): boolean {
    return state.isLogin;
  },
  userId(state: SettingsStateInterface): null | number {
    return state.user.id;
  },
  token(state: SettingsStateInterface): null | string {
    return state.token;
  },
  configAxios(state: SettingsStateInterface) {
    return {
      headers: {
        Authorization: 'Bearer ' + state.token,
      },
    };
  },
};

export default getters;
