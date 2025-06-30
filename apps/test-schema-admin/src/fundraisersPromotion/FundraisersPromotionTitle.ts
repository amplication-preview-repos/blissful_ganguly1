import { FundraisersPromotion as TFundraisersPromotion } from "../api/fundraisersPromotion/FundraisersPromotion";

export const FUNDRAISERSPROMOTION_TITLE_FIELD = "id";

export const FundraisersPromotionTitle = (
  record: TFundraisersPromotion
): string => {
  return record.id?.toString() || String(record.id);
};
