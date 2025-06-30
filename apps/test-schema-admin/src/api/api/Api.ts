import { JsonValue } from "type-fest";

export type Api = {
  createdAt: Date;
  data: JsonValue;
  id: number;
  subscriptionUuid: string;
  updatedAt: Date;
};
