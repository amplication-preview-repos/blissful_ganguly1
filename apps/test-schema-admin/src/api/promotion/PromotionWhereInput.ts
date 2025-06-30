import { PromotionsProductListRelationFilter } from "../promotionsProduct/PromotionsProductListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { FundraisersPromotionListRelationFilter } from "../fundraisersPromotion/FundraisersPromotionListRelationFilter";
import { PromotionsImageWhereUniqueInput } from "../promotionsImage/PromotionsImageWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PromotionWhereInput = {
  categoriesproducts?: PromotionsProductListRelationFilter;
  createdAt?: DateTimeFilter;
  description?: StringFilter;
  discount?: IntFilter;
  endDate?: DateTimeFilter;
  excerpt?: StringFilter;
  fundraisersPromotions?: FundraisersPromotionListRelationFilter;
  id?: StringFilter;
  image?: PromotionsImageWhereUniqueInput;
  max?: FloatNullableFilter;
  min?: FloatNullableFilter;
  name?: StringFilter;
  promotionMethod?: "DOLLAR" | "PERCENTAGE";
  promotionStatus?: "ACTIVE" | "INACTIVE" | "EXPIRES_SOON" | "EXPIRED";
  promotionType?: "FUNDRAISER" | "PARTNER";
  startDate?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
};
