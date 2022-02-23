export interface TodoItem {
  id?: number;
  name?: string;
  completed: string;
}

export type State = {
  items: TodoItem[];
  succes: string;
};

export const state: State = {
  items: [],
  succes: "",
};
