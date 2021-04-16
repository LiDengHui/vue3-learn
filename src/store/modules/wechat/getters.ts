import { wechatState } from './store';

const moduleGetters = {
  isLogin1: (state: wechatState): string => {
    return `${state.loading}`
  }
}

export default moduleGetters;