import { MutationTree } from 'vuex';
import { SettingsStateInterface } from './state';

const mutation: MutationTree<SettingsStateInterface> = {
  login(state: SettingsStateInterface, data) {
    state.isLogin = true;
    state.token = data.token;
    state.user.id = data.user.id;
    state.user.name = data.user.name;
    state.user.email = data.user.email;
  },
  logout(state: SettingsStateInterface) {
    state.isLogin = false;
    state.token = null;
    state.user.id = null;
    state.user.name = null;
    state.user.email = null;
  },
};

export default mutation;
