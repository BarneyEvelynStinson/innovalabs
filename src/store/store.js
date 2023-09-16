import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  mutations: {
    populateUsers: (state, val) => {
      state.users = val;
    },
  },
  actions: {
    callUsersApi: async (context) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      context.commit("populateUsers", data);
    },
  },
});
