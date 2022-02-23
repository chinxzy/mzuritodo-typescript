<template>
  <div class="container todos" v-if="items.length">
    <div v-for="item in items" :key="item.id" class="todo">
      <div>
        {{ item.name }}
      </div>
      <div>
        {{ item.completed }}
      </div>
      <div>
        {{ item.id }}
      </div>
      <i class="fas fa-trash-alt" @click="deleteTodo(item.id)"></i>
      <input type="checkbox" @click="completeItem(item.id)" class="check" />
    </div>
  </div>
  <div v-else>loading</div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import { useStore } from "@/store";

import { mapGetters } from "vuex";
import { ActionTypes } from "@/store/types";
import { TodoItem } from "@/store/state";

export default defineComponent({
  setup() {
    const store = useStore();
    const items = computed(() => store.state.items);

    const deleteTodo = (id: TodoItem) => {
      store.dispatch(ActionTypes.RemoveItem, id);
    };
    const completeItem = (id: TodoItem) => {
      console.log(id);
      store.dispatch(ActionTypes.completeItem, id);
    };
    return { items, deleteTodo, completeItem };
  },
});
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  position: relative;
  text-align: center;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.check {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
}
</style>
