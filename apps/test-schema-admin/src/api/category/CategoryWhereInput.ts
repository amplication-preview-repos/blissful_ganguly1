import { CategoriesProductListRelationFilter } from "../categoriesProduct/CategoriesProductListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { CategoriesImageWhereUniqueInput } from "../categoriesImage/CategoriesImageWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type CategoryWhereInput = {
  categoriesproducts?: CategoriesProductListRelationFilter;
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: CategoriesImageWhereUniqueInput;
  quickStarter?: BooleanFilter;
  title?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  userRoles?: UserRoleWhereUniqueInput;
};
