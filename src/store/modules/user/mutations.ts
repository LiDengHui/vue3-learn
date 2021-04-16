import { compileScript } from '@vue/compiler-sfc';
import { GET_DATA } from './constant';
import { userState } from './store';

export default {
  [GET_DATA]: (state: userState, payload: boolean): void => {
    console.log('mutations 执行成功');
    state.loading = payload;
  }
}