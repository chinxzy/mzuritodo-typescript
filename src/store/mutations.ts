import { MutationTree } from "vuex";
import { State, TodoItem } from "./state";
import { MutationTypes } from "./types";
// export type Mutations = {
//   [MutationTypes.SetTodoItems](state: State, items: TodoItem[]): void;
//   [MutationTypes.NewTodoItems](state: State, item: TodoItem): void;
//   [MutationTypes.RemoveTodoItems](
//     state: State,
//     item: Partial<TodoItem> & { id: null }
//   ): void;
// };
export const mutations = {
  [MutationTypes.NewTodoItems](state: State, item: TodoItem) {
    state.items.unshift(item);
  },
  [MutationTypes.SetTodoItems](state: State, items: TodoItem[]) {
    state.items = items.reverse();
  },
  [MutationTypes.RemoveTodoItems](state: State, id: number) {
    state.items = state.items.filter((item) => item.id !== id);
  },
  [MutationTypes.completeItem](state: State, data: TodoItem) {
    const id = data.id;
    const index = state.items.findIndex((item) => item.id == id);
    state.items[index].completed = "completed";
  },
};
