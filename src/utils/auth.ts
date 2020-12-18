const TOKEN_KEY = "JWT_TOKEN";

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string) => {
  return localStorage.setItem(TOKEN_KEY, token);
};
