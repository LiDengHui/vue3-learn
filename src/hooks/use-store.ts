import { State } from '@/store'
import { Getters } from '@/store/utils'
import { Store, useStore } from 'vuex'

interface IUserYdStore {
  state: State,
  getters: Getters,
}
export const useYdStore = (): IUserYdStore => {
  const { state, getters }: Store<State> = useStore<State>()
  return { state, getters }
}
