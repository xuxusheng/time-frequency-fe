import { createLogger, createStore } from "vuex";
import user from "@/store/modules/user";

export interface RootState {
  ping: "pong";
}

const debug = process.env.NODE_ENV !== "production";

export default createStore<RootState>({
  modules: { user },
  plugins: debug ? [createLogger()] : [],
});
