<template>
  <div>
    <todo-list-item v-for="(todo, index) in activeTodoList" :key="index" :item="todo" :index="index" :isArchive="false"></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from './todo-list-item.vue';
import store from '../store/store.js';

export default {
  name: 'TodoList',
  components: {
      TodoListItem
  },
  computed: {
      activeTodoList () {
          return store.state.activeTodoList;
      }
  }
}
</script>


<style scoped>

</style>
