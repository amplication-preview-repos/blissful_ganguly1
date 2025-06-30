import { SortOrder } from "../../util/SortOrder";

export type FundraisersPromotionOrderByInput = {
  createdAt?: SortOrder;
  fundraiserUuid?: SortOrder;
  id?: SortOrder;
  promotionUuid?: SortOrder;
  source?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
