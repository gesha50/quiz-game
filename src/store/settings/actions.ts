import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { SettingsStateInterface } from './state';

const actions: ActionTree<SettingsStateInterface, StateInterface> = {
  login({ commit }) {
    commit('login');
  },
  logout({ commit }) {
    commit('logout');
  },
};

export default actions;
