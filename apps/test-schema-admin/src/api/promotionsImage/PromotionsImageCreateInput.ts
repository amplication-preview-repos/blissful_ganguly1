import { PromotionCreateNestedManyWithoutPromotionsImagesInput } from "./PromotionCreateNestedManyWithoutPromotionsImagesInput";

export type PromotionsImageCreateInput = {
  name: string;
  path: string;
  promotions?: PromotionCreateNestedManyWithoutPromotionsImagesInput;
};
