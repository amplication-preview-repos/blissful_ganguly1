import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PromotionWhereUniqueInput } from "../promotion/PromotionWhereUniqueInput";

export type PromotionsProductWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  productUuid?: StringFilter;
  promotion?: PromotionWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
