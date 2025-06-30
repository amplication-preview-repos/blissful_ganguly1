import { CategoriesImage as TCategoriesImage } from "../api/categoriesImage/CategoriesImage";

export const CATEGORIESIMAGE_TITLE_FIELD = "name";

export const CategoriesImageTitle = (record: TCategoriesImage): string => {
  return record.name?.toString() || String(record.id);
};
