import request from "@/api/index";
import { Resp } from "@/model";
import { AxiosResponse } from "axios";

interface LoginReq {
  name: string;
  password: string;
}

// 通过泛型将类型传到 post 中去的话，会导致调用的地方类型推断不出来，奇怪的问题
export function login({
  name,
  password,
}: LoginReq): Promise<AxiosResponse<Resp<string>>> {
  return request.post("/v1/login", {
    name,
    password,
  });
}
