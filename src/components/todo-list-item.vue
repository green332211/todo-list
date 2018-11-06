<template>
  <div>
    <input v-model="item.done" type="checkbox" v-if="!isArchive">

    {{ item.name }}

    <button v-if="item.done && !isArchive" @click="addToArchive">В архив</button>
    <button v-else @click="addToActive">В активные</button>
  </div>
</template>

<script>
import store from '../store/store.js';

export default {
  name: 'TodoListItem',
  props: ['item', 'index', 'isArchive'],
  methods: {
      addToArchive() {
          store.dispatch('addToArchive', this.index);
      },
      addToActive() {
          console.log(this.item.name)
          store.dispatch('addToActive', this.item.name, this.index);
      }
  }
}
</script>


<style scoped>

</style>
