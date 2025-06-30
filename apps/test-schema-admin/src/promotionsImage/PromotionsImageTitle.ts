import { PromotionsImage as TPromotionsImage } from "../api/promotionsImage/PromotionsImage";

export const PROMOTIONSIMAGE_TITLE_FIELD = "name";

export const PromotionsImageTitle = (record: TPromotionsImage): string => {
  return record.name?.toString() || String(record.id);
};
