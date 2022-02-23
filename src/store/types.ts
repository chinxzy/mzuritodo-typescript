export enum ActionTypes {
  FetchTodoItems = "FETCH_ITEMS",
  AddTodoItems = "ADD_ITEMS",
  completeItem = "CHECK_ITEMS",
  RemoveItem = "DELETE_ITEMS",
}
export enum MutationTypes {
  SetTodoItems = "SET_ITEMS",
  NewTodoItems = "NEW_ITEMS",
  RemoveTodoItems = "REMOVE_ITEMS",
  completeItem = "CHECK_ITEMS",
}

export interface ResponseData {
  data: any;
}
export interface normalTypes {
  name: string;
  completed: string;
}
