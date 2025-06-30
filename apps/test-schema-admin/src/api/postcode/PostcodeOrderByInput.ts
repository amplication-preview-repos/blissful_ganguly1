import { SortOrder } from "../../util/SortOrder";

export type PostcodeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  metro?: SortOrder;
  updatedAt?: SortOrder;
  userRolesUuid?: SortOrder;
};
