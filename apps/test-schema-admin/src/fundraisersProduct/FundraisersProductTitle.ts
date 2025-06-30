import { FundraisersProduct as TFundraisersProduct } from "../api/fundraisersProduct/FundraisersProduct";

export const FUNDRAISERSPRODUCT_TITLE_FIELD = "fundraiserPromotionUuid";

export const FundraisersProductTitle = (
  record: TFundraisersProduct
): string => {
  return record.fundraiserPromotionUuid?.toString() || String(record.id);
};
