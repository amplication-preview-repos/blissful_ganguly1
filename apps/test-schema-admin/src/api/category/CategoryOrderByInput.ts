import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUuid?: SortOrder;
  quickStarter?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  supplierUuid?: SortOrder;
};
