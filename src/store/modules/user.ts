import { Module } from "vuex";
import { ElMessage } from "element-plus";

import { getMe, login, updateUser } from "@/api";
import { Role, User } from "@/model";
import { RootState } from "@/store";
import { wrapLoading } from "@/utils/loading";
import auth from "@/utils/auth";
import router from "@/router";

export enum MutTypes {
  SetLoading = "SetLoading",
  SetUser = "SetUser",
}

export enum ActTypes {
  LoginAsync = "LoginAsync",
  GetUserAsync = "GetUserAsync",
  UpdateUserAsync = "UpdateUserAsync",
}

interface DataState {
  userInfo: User;
}

type LoadingState = {
  [k in keyof DataState | "login" | "update" | "get"]?: boolean;
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
    // 登录
    async [ActTypes.LoginAsync]({ commit, dispatch }, { name, password }) {
      const resp = await wrapLoading(login({ name, password }), {
        key: "login",
        type: MutTypes.SetLoading,
        commit,
      });

      ElMessage.success("登录成功");
      auth.setToken(resp.data.data);

      // 登录成功，请求用户信息
      dispatch(ActTypes.GetUserAsync);

      router.push("/");
    },
    // 获取当前用户信息
    async [ActTypes.GetUserAsync]({ commit }) {
      const resp = await wrapLoading(getMe(), {
        key: "userInfo",
        type: MutTypes.SetLoading,
        commit,
      });
      commit(MutTypes.SetUser, resp.data.data);
      return resp.data.data;
    },
    // 更新用户信息
    async [ActTypes.UpdateUserAsync]({ commit, state }, { name, phone }) {
      const resp = await wrapLoading(
        updateUser(state.userInfo.id, name, phone),
        {
          key: "update",
          type: MutTypes.SetLoading,
          commit,
        }
      );
      commit(MutTypes.SetUser, resp.data.data);
      ElMessage.success("用户信息更新成功");
    },
  },
};

export default module;
