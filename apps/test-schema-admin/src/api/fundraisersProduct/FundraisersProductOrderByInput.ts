import { SortOrder } from "../../util/SortOrder";

export type FundraisersProductOrderByInput = {
  createdAt?: SortOrder;
  discount?: SortOrder;
  fundraiserPrice?: SortOrder;
  fundraiserPromotionUuid?: SortOrder;
  fundraiserUuid?: SortOrder;
  id?: SortOrder;
  productUuid?: SortOrder;
  productPrice?: SortOrder;
  promotionUuid?: SortOrder;
  updatedAt?: SortOrder;
};
