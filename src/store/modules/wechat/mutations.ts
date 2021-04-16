import { compileScript } from '@vue/compiler-sfc';
import { GET_DATA } from './constant';
import { wechatState } from './store';

export default {
  [GET_DATA]: (state: wechatState, payload: boolean): void => {
    console.log('mutations 执行成功');
    state.loading = payload;
  }
}