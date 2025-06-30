import { PromotionsProductCreateNestedManyWithoutPromotionsInput } from "./PromotionsProductCreateNestedManyWithoutPromotionsInput";
import { FundraisersPromotionCreateNestedManyWithoutPromotionsInput } from "./FundraisersPromotionCreateNestedManyWithoutPromotionsInput";
import { PromotionsImageWhereUniqueInput } from "../promotionsImage/PromotionsImageWhereUniqueInput";

export type PromotionCreateInput = {
  categoriesproducts?: PromotionsProductCreateNestedManyWithoutPromotionsInput;
  description: string;
  discount: number;
  excerpt: string;
  fundraisersPromotions?: FundraisersPromotionCreateNestedManyWithoutPromotionsInput;
  image?: PromotionsImageWhereUniqueInput | null;
  max?: number | null;
  min?: number | null;
  name: string;
  promotionMethod: "DOLLAR" | "PERCENTAGE";
  promotionStatus: "ACTIVE" | "INACTIVE" | "EXPIRES_SOON" | "EXPIRED";
  promotionType: "FUNDRAISER" | "PARTNER";
};
