import { CategoriesProductUpdateManyWithoutCategoriesInput } from "./CategoriesProductUpdateManyWithoutCategoriesInput";
import { CategoriesImageWhereUniqueInput } from "../categoriesImage/CategoriesImageWhereUniqueInput";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type CategoryUpdateInput = {
  categoriesproducts?: CategoriesProductUpdateManyWithoutCategoriesInput;
  description?: string | null;
  image?: CategoriesImageWhereUniqueInput | null;
  quickStarter?: boolean;
  title?: string | null;
  userRoles?: UserRoleWhereUniqueInput | null;
};
