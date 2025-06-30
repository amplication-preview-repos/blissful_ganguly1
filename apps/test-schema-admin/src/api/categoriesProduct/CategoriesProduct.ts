import { Category } from "../category/Category";

export type CategoriesProduct = {
  category?: Category;
  createdAt: Date;
  id: string;
  productUuid: string;
  updatedAt: Date;
};
