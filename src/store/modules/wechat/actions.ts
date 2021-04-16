import { GET_DATA } from './constant';
import { ActionContext } from 'vuex';
import { wechatState } from './store';
export default {
  [GET_DATA]: ({ commit }: ActionContext<wechatState, unknown>): void => {
    console.log("action 执行成功");
    setTimeout(() => {
      const payload = false;
      commit(GET_DATA, payload);
    }, 200)
  }
}