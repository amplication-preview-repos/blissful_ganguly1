import { Category } from "../category/Category";

export type CategoriesImage = {
  categories?: Array<Category>;
  createdAt: Date;
  id: string;
  name: string;
  path: string;
  updatedAt: Date;
};
