import { CategoriesProduct } from "../categoriesProduct/CategoriesProduct";
import { CategoriesImage } from "../categoriesImage/CategoriesImage";
import { UserRole } from "../userRole/UserRole";

export type Category = {
  categoriesproducts?: Array<CategoriesProduct>;
  createdAt: Date;
  description: string | null;
  id: string;
  image?: CategoriesImage | null;
  quickStarter: boolean;
  title: string | null;
  updatedAt: Date;
  userRoles?: UserRole | null;
};
