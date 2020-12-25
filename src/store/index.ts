import { createLogger, createStore } from "vuex";
import user from "@/store/modules/user";
import permission from "@/store/modules/permission";
import getters from "@/store/getters";

export interface RootState {
  ping: "pong";
}

const debug = process.env.NODE_ENV !== "production";

export default createStore<RootState>({
  modules: { user, permission },
  getters,
  // plugins: debug ? [createLogger()] : [],
});
