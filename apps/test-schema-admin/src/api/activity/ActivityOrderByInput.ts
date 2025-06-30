import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  activityStatus?: SortOrder;
  assigned?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  link?: SortOrder;
  linkDrawer?: SortOrder;
  linkName?: SortOrder;
  linkUuid?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  userName?: SortOrder;
  userUuid?: SortOrder;
};
