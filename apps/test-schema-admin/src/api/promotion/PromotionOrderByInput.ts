import { SortOrder } from "../../util/SortOrder";

export type PromotionOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  discount?: SortOrder;
  endDate?: SortOrder;
  excerpt?: SortOrder;
  id?: SortOrder;
  imageUuid?: SortOrder;
  max?: SortOrder;
  min?: SortOrder;
  name?: SortOrder;
  promotionMethod?: SortOrder;
  promotionStatus?: SortOrder;
  promotionType?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
