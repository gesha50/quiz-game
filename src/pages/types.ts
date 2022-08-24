export type userType = {
  name?: string;
  email: string;
  password: string;
  password2?: string;
};

export type quizType = {
  link: string;
  is_visible: boolean | number;
  category_id: number | null;
  user_id: number;
  image?: string | null;
};

export type startScreenType = {
  title: string;
  description: string;
  image?: string | null;
  source?: string;
  quiz_id: number | null;
};

export interface InputFileEvent {
  target: {
    files: never;
  };
}
export type categoryType = {
  id: number;
  label?: string;
  title?: string;
};
