import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type CategoriesProductCreateInput = {
  category: CategoryWhereUniqueInput;
  productUuid: string;
};
