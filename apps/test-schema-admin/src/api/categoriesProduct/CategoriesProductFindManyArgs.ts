import { CategoriesProductWhereInput } from "./CategoriesProductWhereInput";
import { CategoriesProductOrderByInput } from "./CategoriesProductOrderByInput";

export type CategoriesProductFindManyArgs = {
  where?: CategoriesProductWhereInput;
  orderBy?: Array<CategoriesProductOrderByInput>;
  skip?: number;
  take?: number;
};
