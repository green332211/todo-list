import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        activeTodoList: [],
        archiveTodoList: []
    },
    mutations: {
        add(state, todoName) {
            state.activeTodoList.push({
                name: todoName,
                done: false,
            });
        },
        addToArchive(state, todoIndex) {
            const todoItem = state.activeTodoList[todoIndex];
            state.archiveTodoList.push(todoItem);

            state.activeTodoList.splice(todoIndex, 1);
        },
        addToActive(state, todoName, todoIndex) {
            const todoItem = state.archiveTodoList[todoIndex];
            state.activeTodoList.push({
                name: todoName,
                done: false,
            });

            state.archiveTodoList.splice(todoIndex, 1);
        }
    },
    actions: {
        add(context, todoName) {
            context.commit('add', todoName);
        },
        addToArchive(context, todoIndex) {
            context.commit('addToArchive', todoIndex);
        },
        addToActive(context, todoIndex) {
            context.commit('addToActive', todoIndex);
        },
    }
});
