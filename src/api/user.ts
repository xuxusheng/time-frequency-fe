import request from "@/api/index";
import { AxiosResponse } from "axios";
import { Resp } from "@/model";
import { User } from "@/model/user";

export function getMe(): Promise<AxiosResponse<Resp<User>>> {
  return request.get("/v1/users/me");
}

export function updateUser(
  id: number,
  name: string,
  phone: string
): Promise<AxiosResponse<Resp<User>>> {
  return request.put(`/v1/users/${id}`, {
    name,
    phone,
  });
}

export function changeUserPwd(
  id: number,
  oldPassword: string,
  newPassword: string
) {
  return request.put(`/v1/users/${id}/password`, {
    oldPassword,
    newPassword,
  });
}
