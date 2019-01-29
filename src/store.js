import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    links: [
      'https://www.marvelholidays.com',
      'https://www.marvelin.com',
      'https://www.marvelair.com',
      'https://www.marvelgolf.com'
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {

  },
  actions: {

  }
})
