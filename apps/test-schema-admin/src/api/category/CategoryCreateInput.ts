import { CategoriesProductCreateNestedManyWithoutCategoriesInput } from "./CategoriesProductCreateNestedManyWithoutCategoriesInput";
import { CategoriesImageWhereUniqueInput } from "../categoriesImage/CategoriesImageWhereUniqueInput";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type CategoryCreateInput = {
  categoriesproducts?: CategoriesProductCreateNestedManyWithoutCategoriesInput;
  description?: string | null;
  image?: CategoriesImageWhereUniqueInput | null;
  quickStarter: boolean;
  title?: string | null;
  userRoles?: UserRoleWhereUniqueInput | null;
};
