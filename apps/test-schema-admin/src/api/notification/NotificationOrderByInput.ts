import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  isRead?: SortOrder;
  link?: SortOrder;
  linkName?: SortOrder;
  name?: SortOrder;
  target?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  userUuid?: SortOrder;
};
