import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoriesProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  productUuid?: StringFilter;
  updatedAt?: DateTimeFilter;
};
