import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { SettingsStateInterface } from './state';

const getters: GetterTree<SettingsStateInterface, StateInterface> = {
  isLogin(state: SettingsStateInterface): boolean {
    return state.isLogin;
  },
};

export default getters;
