import { PromotionWhereUniqueInput } from "../promotion/PromotionWhereUniqueInput";

export type PromotionsProductCreateInput = {
  productUuid: string;
  promotion: PromotionWhereUniqueInput;
};
