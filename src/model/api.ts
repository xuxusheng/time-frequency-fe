import { Page } from "./page";

export interface Meta {
  errCode: number;
  errMsg: string;
  errDetails: string[];
}

export interface Resp<T = {}> {
  meta: Meta;
  data: T;
}

export interface DWithP<T> extends Page {
  items: T[];
}
