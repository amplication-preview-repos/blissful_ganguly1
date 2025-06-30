import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoriesImageWhereInput = {
  categories?: CategoryListRelationFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  path?: StringFilter;
  updatedAt?: DateTimeFilter;
};
