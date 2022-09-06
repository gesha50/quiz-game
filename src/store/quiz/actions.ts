import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { QuizStateInterface } from './state';

const actions: ActionTree<QuizStateInterface, StateInterface> = {
  updateQuestionTitle({ commit }, arr) {
    commit('updateQuestionTitle', arr);
  },
  updateQuestionBonus({ commit }, arr) {
    commit('updateQuestionBonus', arr);
  },
  updateQuestionTime({ commit }, arr) {
    commit('updateQuestionTime', arr);
  },
  updateQuestionImageFile({ commit }, arr) {
    commit('updateQuestionImageFile', arr);
  },
  deleteImage({ commit }, arr) {
    commit('deleteImage', arr);
  },
  updateCorrectAnswer({ commit }, arr) {
    commit('updateCorrectAnswer', arr);
  },
  updateAnswer({ commit }, arr) {
    commit('updateAnswer', arr);
  },
  setQuizzes({ commit }, arr) {
    commit('setQuizzes', arr);
  },
  updateSSTitle({ commit }, arr) {
    commit('updateSSTitle', arr);
  },
  updateSSDesc({ commit }, arr) {
    commit('updateSSDesc', arr);
  },
  updateSSSource({ commit }, arr) {
    commit('updateSSSource', arr);
  },
  updateCurrentResultID({ commit }, num) {
    commit('updateCurrentResultID', num);
  },
};

export default actions;
