import router from "@/router";

const TOKEN_KEY = "JWT_TOKEN";

class Auth {
  getToken = () => {
    return localStorage.getItem(TOKEN_KEY) || "";
  };

  setToken = (token: string) => {
    return localStorage.setItem(TOKEN_KEY, token);
  };

  isLogin() {
    // 后期可以扩展，判断是否过期，字符串是否合法之类的
    return this.getToken() !== "";
  }

  logout() {
    this.setToken("");
    router.push("/login");
  }
}

const auth = new Auth();

export default auth;
