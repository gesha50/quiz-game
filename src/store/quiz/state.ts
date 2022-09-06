import { startScreenType } from 'pages/types';

export interface QuizStateInterface {
  quizzes: QuizInterface[];
  results: ResultInterface[];
  current_result_id: number | null;
}

export interface QuizInterface {
  id: number;
  link: string;
  is_visible: boolean | number;
  category_id?: null | number;
  category: CategoryInterface[];
  user_id: number;
  image: null | string;
  questions: QuestionsInterface[];
  start_screen: startScreenType;
}

export interface CategoryInterface {
  id: number;
  title: string;
  image: null | string;
}

export interface QuestionsInterface {
  id: number;
  title: string;
  image: null | string;
  file: null | string;
  description: string;
  bonus: string | number;
  time_to_answer: string | number;
  quiz_id: number;
  correct_answer: null | number;
  answers: AnswersInterface[];
}
export interface AnswersInterface {
  id: number;
  title: string;
  is_correct: boolean;
}

export interface ResultInterface {
  id: number;
  user_id?: number | null;
  quiz_id: number;
  total_bonus: number;
}

export interface ResultDetailsInterface {
  resultDetails: ResultDetailInterface[];
}

export interface ResultDetailInterface {
  result_id: number | null;
  question_id: number;
  choice?: number | null;
  time_to_end?: number | null;
}

function state(): QuizStateInterface {
  return {
    quizzes: [],
    results: [],
    current_result_id: null,
  };
}

export default state;
