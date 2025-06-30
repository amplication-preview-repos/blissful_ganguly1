import { PromotionsProductUpdateManyWithoutPromotionsInput } from "./PromotionsProductUpdateManyWithoutPromotionsInput";
import { FundraisersPromotionUpdateManyWithoutPromotionsInput } from "./FundraisersPromotionUpdateManyWithoutPromotionsInput";
import { PromotionsImageWhereUniqueInput } from "../promotionsImage/PromotionsImageWhereUniqueInput";

export type PromotionUpdateInput = {
  categoriesproducts?: PromotionsProductUpdateManyWithoutPromotionsInput;
  description?: string;
  discount?: number;
  excerpt?: string;
  fundraisersPromotions?: FundraisersPromotionUpdateManyWithoutPromotionsInput;
  image?: PromotionsImageWhereUniqueInput | null;
  max?: number | null;
  min?: number | null;
  name?: string;
  promotionMethod?: "DOLLAR" | "PERCENTAGE";
  promotionStatus?: "ACTIVE" | "INACTIVE" | "EXPIRES_SOON" | "EXPIRED";
  promotionType?: "FUNDRAISER" | "PARTNER";
};
