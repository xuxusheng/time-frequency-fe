import { Module } from "vuex";
import { getMe, updateUser } from "@/api/user";
import { Role, User } from "@/model";
import { RootState } from "@/store";
import { ElMessage } from "element-plus";

export enum MutTypes {
  SetLoading = "SetLoading",
  SetUser = "SetUser",
}

export enum ActTypes {
  GetUserAsync = "GetUserAsync",
  UpdateUserAsync = "UpdateUserAsync",
}

interface DataState {
  userInfo: User;
}

type LoadingState = {
  [k in keyof DataState | "update" | "get"]?: boolean;
};

interface UIState {
  loading: LoadingState;
}

type State = DataState & UIState;

const module: Module<State, RootState> = {
  namespaced: true,
  state: () => ({
    userInfo: {
      id: 0,
      name: "",
      phone: "",
      role: Role[""],
      createdAt: "",
      updatedAt: "",
    },
    loading: false,
  }),
  mutations: {
    [MutTypes.SetLoading](state, payload: LoadingState) {
      state.loading = { ...state.loading, ...payload };
    },
    [MutTypes.SetUser](state, payload: User) {
      state.userInfo = payload;
    },
  },
  actions: {
    // 获取当前用户信息
    async [ActTypes.GetUserAsync]({ commit }) {
      commit(MutTypes.SetLoading, { userInfo: true });
      try {
        const resp = await getMe();
        commit(MutTypes.SetUser, resp.data.data);
        commit(MutTypes.SetLoading, { userInfo: false });
      } catch (err) {
        commit(MutTypes.SetLoading, { userInfo: false });
      }
    },
    // 更新用户信息
    async [ActTypes.UpdateUserAsync](
      { commit, state, dispatch },
      { name, phone }
    ) {
      commit(MutTypes.SetLoading, { update: true });
      try {
        const resp = await updateUser(state.userInfo.id, name, phone);
        commit(MutTypes.SetUser, resp.data.data);
        commit(MutTypes.SetLoading, { update: false });
        ElMessage.success("用户信息修改成功");
      } catch (err) {
        commit(MutTypes.SetLoading, { update: false });
      }
    },
  },
};

export default module;
