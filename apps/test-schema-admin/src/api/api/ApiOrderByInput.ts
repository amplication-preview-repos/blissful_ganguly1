import { SortOrder } from "../../util/SortOrder";

export type ApiOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  subscriptionUuid?: SortOrder;
  updatedAt?: SortOrder;
};
