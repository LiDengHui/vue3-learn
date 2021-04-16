import { userState } from './store';

const moduleGetters = {
  isLogin: (state: userState): string => {
    return `${state.loading}`
  },

  isLogin2: (state: userState): string => {
    return `YDStore 推到出 user/isLogin2 类型 login:${state.loading}`
  }
}

export default moduleGetters;