import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type CategoriesProductUpdateInput = {
  category?: CategoryWhereUniqueInput;
  productUuid?: string;
};
