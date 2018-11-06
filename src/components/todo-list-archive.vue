<template>
  <div>
    <todo-list-item v-for="(todo, index) in archiveTodoList" :key="index" :item="todo" :index="index" :isArchive="true"></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from './todo-list-item.vue';
import store from '../store/store.js';

export default {
  name: 'TodoListArchive',
  components: {
      TodoListItem
  },
  computed: {
      archiveTodoList () {
          return store.state.archiveTodoList;
      }
  }
}
</script>


<style scoped>

</style>
