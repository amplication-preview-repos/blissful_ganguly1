import { Fundraiser } from "../fundraiser/Fundraiser";
import { Product } from "../product/Product";

export type FundraisersProduct = {
  createdAt: Date;
  discount: number;
  fundraiserPrice: number;
  fundraiserPromotionUuid: string;
  fundraisers?: Fundraiser;
  id: string;
  product?: Product | null;
  productPrice: number;
  promotionUuid: string;
  updatedAt: Date;
};
