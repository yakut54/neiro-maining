import { createStore } from 'vuex'

export default createStore({
  state: {
    data,
    isStart: false,
    outerItem: {},
    innerItem: {}
  },
  mutations: {
    setOuterItem: (state, item) => state.outerItem = item,
    setInnerItem: (state, item) => state.innerItem = item,
    setIsStart: (state, bool) => state.isStart = bool,
  }
})
