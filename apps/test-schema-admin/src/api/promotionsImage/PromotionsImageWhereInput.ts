import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PromotionListRelationFilter } from "../promotion/PromotionListRelationFilter";

export type PromotionsImageWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  path?: StringFilter;
  promotions?: PromotionListRelationFilter;
  updatedAt?: DateTimeFilter;
};
