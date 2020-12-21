import { Commit } from "vuex";
import { AxiosResponse } from "axios";

// 封装一下请求，自动触发 loading 的状态修改
// todo 泛型同时接受 LoadingState，和 api 的类型的话，会导致返回的推断有点问题，无法根据传入的 api$ 类型来推断，必须要手动指定，需要再优化优化
export function wrapLoading<T extends AxiosResponse>(
  api$: Promise<T>,
  {
    key,
    type,
    commit,
  }: {
    key: string;
    type: string;
    commit: Commit;
  }
) {
  commit(type, { [key]: true });
  return api$
    .then((d) => {
      commit(type, { [key]: false });
      return d;
    })
    .catch((err) => {
      commit(type, { [key]: false });
      throw err;
    });
}
