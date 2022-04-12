import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    curType: 'all',
    curId: 6
  },
  mutations: {
    setList(state, data){
      state.list = data;
    },
    changeCurType(state, type) {
      if (!type) return;
      state.curType = type;
    },
    cleanDone(state) {
      state.list = state.list.filter(one => one.done == false);
    },
    deleteOne(state, id) {
      let index = state.list.findIndex(one => one.id == id);
      console.log(index)
      state.list.splice(index,1);
    },
    addNew(state, todo) {
      let one = {
        id:state.curId,
        info: todo,
        done: false
      }
      state.list.push(one);
      state.curId++;
    },
    updateItemStatus(state, id) {
      let item = state.list.find(one => one.id == id);
      item.done = !item.done;
    }
  },
  actions: {
    getList(context) {
      axios.get('./data.json').then(res => {
        console.log(res.data);
        context.commit('setList', res.data);
      })
    }
  },
  getters: {
    alisList(state) {
      if(state.curType == 'undo') {
        return state.list.filter(one => one.done == false);
      }
      if (state.curType == 'done') {
        return state.list.filter(one => one.done == true);
      }
      return state.list;
    }
  },
  modules: {
  }
})
