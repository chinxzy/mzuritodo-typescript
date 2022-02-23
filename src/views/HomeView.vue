<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AddTodo />
    <TodosView />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TodosView from "@/components/TodosView.vue";
import AddTodo from "@/components/AddTodo.vue";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/types";

export default defineComponent({
  components: { TodosView, AddTodo },
  setup() {
    const store = useStore();

    store.dispatch(ActionTypes.FetchTodoItems);
  },

  // methods: {
  //   ...mapActions(["FETCH_ITEMS"]),
  // },

  // mounted() {
  //   this.FETCH_ITEMS();
  // },
});
</script>
