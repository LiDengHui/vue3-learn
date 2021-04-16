import { createStore } from 'vuex';

import { modules } from './modules';

import { userState } from './modules/user/store';
import { wechatState } from './modules/wechat/store';

export type State = {
  user: userState,
  wechat: wechatState
}

export default createStore<State>({ modules })