export interface propsForStandardText {
  preview?: string;
  header: string;
  description: string;
  pluses?: pluses[];
  statistics?: statistics[];
}

type pluses = {
  id: number;
  text: string;
};

type statistics = {
  id: number;
  number: number;
  icon: string;
  text: string;
};
