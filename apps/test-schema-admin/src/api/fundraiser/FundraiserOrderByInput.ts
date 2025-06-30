import { SortOrder } from "../../util/SortOrder";

export type FundraiserOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  imageUuid?: SortOrder;
  statusUuid?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  link?: SortOrder;
  postcode?: SortOrder;
  startDate?: SortOrder;
  subscribed?: SortOrder;
  suburb?: SortOrder;
  target?: SortOrder;
  title?: SortOrder;
  topic?: SortOrder;
  topicUuid?: SortOrder;
  updatedAt?: SortOrder;
  userUuid?: SortOrder;
  supplierUuid?: SortOrder;
};
