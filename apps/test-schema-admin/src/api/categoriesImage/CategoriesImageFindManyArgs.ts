import { CategoriesImageWhereInput } from "./CategoriesImageWhereInput";
import { CategoriesImageOrderByInput } from "./CategoriesImageOrderByInput";

export type CategoriesImageFindManyArgs = {
  where?: CategoriesImageWhereInput;
  orderBy?: Array<CategoriesImageOrderByInput>;
  skip?: number;
  take?: number;
};
