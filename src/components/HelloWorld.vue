<template>
  <div class="hello">
    <div v-if="isActiveShow">
      <input type="text" name="" id="" v-model="todoName">
      <button @click="add">Добавить</button>
    </div>
    <hr>

    <button @click="showActive">Активные</button>
    <button @click="showArchive">Архив</button>

    
    <todo-list v-if="isActiveShow"></todo-list>
    <todo-list-arhive v-else></todo-list-arhive>

  </div>
</template>

<script>
import TodoList from './todo-list.vue';
import store from '../store/store.js';
import TodoListArhive from './todo-list-archive.vue'

export default {
  name: 'HelloWorld',
  components: {
    TodoList,
    TodoListArhive
  },
  data: () => ({
    todoName: '',
    isActiveShow: true
  }),
  methods: {
    add() {
      store.dispatch('add', this.todoName);
    },
    showActive () {
      this.isActiveShow = true;
    },
    showArchive () {
      this.isActiveShow = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
