import { createState } from './store';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
const state = createState()

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}