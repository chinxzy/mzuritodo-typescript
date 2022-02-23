import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  allItems(state: State): void;
};

export const getters: GetterTree<State, State> & Getters = {
  allItems(state) {
    return state.items;
  },
};
