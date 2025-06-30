import { CategoryCreateNestedManyWithoutCategoriesImagesInput } from "./CategoryCreateNestedManyWithoutCategoriesImagesInput";

export type CategoriesImageCreateInput = {
  categories?: CategoryCreateNestedManyWithoutCategoriesImagesInput;
  name: string;
  path: string;
};
