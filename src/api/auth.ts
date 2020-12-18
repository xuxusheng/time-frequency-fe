import request from "@/api/index";
import { Resp } from "@/model";

interface LoginReq {
  name: string;
  password: string;
}

export function login({ name, password }: LoginReq) {
  return request.post<Resp<{ token: string }>>("/v1/login", {
    name,
    password,
  });
}
