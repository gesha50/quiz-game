import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { QuizStateInterface } from './state';

const getters: GetterTree<QuizStateInterface, StateInterface> = {
  quizzes(state) {
    return state.quizzes;
  },
  getCurrentQuiz: (state) => (link: string) => {
    return state.quizzes.find((quiz) => quiz.link == link);
  },
};

export default getters;
