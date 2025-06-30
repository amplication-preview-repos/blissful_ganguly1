import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  assigned?: SortOrder;
  channel?: SortOrder;
  channelUuid?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isPrivate?: SortOrder;
  isRead?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  userName?: SortOrder;
  userUuid?: SortOrder;
};
