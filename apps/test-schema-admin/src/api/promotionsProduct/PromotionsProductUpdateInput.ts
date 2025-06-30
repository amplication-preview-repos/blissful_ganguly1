import { PromotionWhereUniqueInput } from "../promotion/PromotionWhereUniqueInput";

export type PromotionsProductUpdateInput = {
  productUuid?: string;
  promotion?: PromotionWhereUniqueInput;
};
