import { SortOrder } from "../../util/SortOrder";

export type UserRoleOrderByInput = {
  createdAt?: SortOrder;
  emailNotification?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  usersUuid?: SortOrder;
};
