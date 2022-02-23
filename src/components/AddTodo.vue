<template>
  <div>
    <h3>Add Todo</h3>
    <form @submit.prevent="createTask">
      <div class="mb-3 mt-3">
        <input type="text" class="form-control" v-model="text" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useStore } from "@/store";
import { state, TodoItem } from "@/store/state";
import { ActionTypes, normalTypes, MutationTypes } from "@/store/types";

export default defineComponent({
  setup() {
    const text = ref("");
    const store = useStore();

    const createTask = () => {
      if (text.value === "") return;

      const item: TodoItem = {
        name: text.value,
        completed: "uncompleted",
      };
      text.value = "";
      store.dispatch(ActionTypes.AddTodoItems, item);
    };
    return { createTask, text };
  },
});
</script>
