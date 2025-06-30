import { PromotionsProduct as TPromotionsProduct } from "../api/promotionsProduct/PromotionsProduct";

export const PROMOTIONSPRODUCT_TITLE_FIELD = "productUuid";

export const PromotionsProductTitle = (record: TPromotionsProduct): string => {
  return record.productUuid?.toString() || String(record.id);
};
