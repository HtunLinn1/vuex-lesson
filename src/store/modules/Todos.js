import axios from "axios";
export default {
  state: {
    todos:[],
  },
  getters: {
    myTodos(state) {
      return state.todos
    }
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    removeTodo(state, removeId) {
      state.todos = state.todos.filter(todo => {
        return todo.id != removeId
      });
    }
  },
  actions: {
    async getTodos({commit}){
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      let todos = res.data;

      commit('setTodos', todos)
    },
    async addTodo({ commit }, newTodo) {
      let res = await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
      console.log(res.data);

      commit('setTodo', res.data)
    },
    async deleteTodo(context, removeId) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${removeId}`);
      context.commit('removeTodo', removeId);
    }
  },
};