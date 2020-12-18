import { Model } from "./model";

enum Role {
  admin = "admin",
  member = "member",
}

export interface User extends Model {
  name: string;
  phone: string;
  role: Role;
}
