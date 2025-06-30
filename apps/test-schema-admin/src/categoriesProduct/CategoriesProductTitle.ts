import { CategoriesProduct as TCategoriesProduct } from "../api/categoriesProduct/CategoriesProduct";

export const CATEGORIESPRODUCT_TITLE_FIELD = "productUuid";

export const CategoriesProductTitle = (record: TCategoriesProduct): string => {
  return record.productUuid?.toString() || String(record.id);
};
