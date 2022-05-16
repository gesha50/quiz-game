import { MutationTree } from 'vuex';
import { SettingsStateInterface } from './state';

const mutation: MutationTree<SettingsStateInterface> = {
  login(state: SettingsStateInterface) {
    state.isLogin = true;
  },
  logout(state: SettingsStateInterface) {
    state.isLogin = false;
  },
};

export default mutation;
