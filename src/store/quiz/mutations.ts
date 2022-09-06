import { MutationTree } from 'vuex';
import { QuizStateInterface } from './state';

const mutation: MutationTree<QuizStateInterface> = {
  updateQuestionTitle(state: QuizStateInterface, arr) {
    state.quizzes.find((quiz) => {
      if (quiz.id === arr[2]) {
        quiz.questions.find((question) => {
          if (question.id === arr[1]) {
            question.title = arr[0];
          }
        });
      }
    });
  },
  updateQuestionBonus(state: QuizStateInterface, arr) {
    state.quizzes.find((quiz) => {
      if (quiz.id === arr[2]) {
        quiz.questions.find((question) => {
          if (question.id === arr[1]) {
            question.bonus = arr[0];
          }
        });
      }
    });
  },
  updateQuestionTime(state: QuizStateInterface, arr) {
    state.quizzes.find((quiz) => {
      if (quiz.id === arr[2]) {
        quiz.questions.find((question) => {
          if (question.id === arr[1]) {
            question.time_to_answer = arr[0];
          }
        });
      }
    });
  },
  updateQuestionImageFile(state: QuizStateInterface, arr) {
    state.quizzes.find((quiz) => {
      if (quiz.id === arr[3]) {
        quiz.questions.find((question) => {
          if (question.id === arr[0]) {
            question.file = arr[1];
            question.image = arr[2];
          }
        });
      }
    });
  },
  deleteImage(state: QuizStateInterface, arr) {
    state.quizzes.find((quiz) => {
      if (quiz.id === arr[0]) {
        quiz.questions.find((question) => {
          if (question.id === arr[1]) {
            question.file = null;
            question.image = null;
          }
        });
      }
    });
  },
  updateAnswer(state: QuizStateInterface, arr) {
    state.quizzes.find((quiz) => {
      if (quiz.id === arr[3]) {
        quiz.questions.find((question) => {
          if (question.id === arr[0]) {
            question.answers.find((ans) => {
              if (ans.id === arr[2]) {
                ans.title = arr[1];
              }
            });
          }
        });
      }
    });
  },
  updateCorrectAnswer(state: QuizStateInterface, arr) {
    state.quizzes.find((quiz) => {
      if (quiz.id === arr[2]) {
        quiz.questions.find((question) => {
          if (question.id === arr[0]) {
            question.correct_answer = arr[1];
          }
        });
      }
    });
  },
  setQuizzes(state: QuizStateInterface, data) {
    state.quizzes = data;
    // console.log(state.quizzes);
  },
  updateSSTitle(state: QuizStateInterface, arr) {
    state.quizzes.find((quiz) => {
      if (quiz.id === arr[1]) {
        quiz.start_screen.title = arr[0];
      }
    });
  },
  updateSSDesc(state: QuizStateInterface, arr) {
    state.quizzes.find((quiz) => {
      if (quiz.id === arr[1]) {
        quiz.start_screen.description = arr[0];
      }
    });
  },
  updateSSSource(state: QuizStateInterface, arr) {
    state.quizzes.find((quiz) => {
      if (quiz.id === arr[1]) {
        quiz.start_screen.source = arr[0];
      }
    });
  },
  updateCurrentResultID(state: QuizStateInterface, num) {
    state.current_result_id = num;
  },
};

export default mutation;
