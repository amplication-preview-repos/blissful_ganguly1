import { PromotionsProduct } from "../promotionsProduct/PromotionsProduct";
import { FundraisersPromotion } from "../fundraisersPromotion/FundraisersPromotion";
import { PromotionsImage } from "../promotionsImage/PromotionsImage";

export type Promotion = {
  categoriesproducts?: Array<PromotionsProduct>;
  createdAt: Date;
  description: string;
  discount: number;
  endDate: Date;
  excerpt: string;
  fundraisersPromotions?: Array<FundraisersPromotion>;
  id: string;
  image?: PromotionsImage | null;
  max: number | null;
  min: number | null;
  name: string;
  promotionMethod?: "DOLLAR" | "PERCENTAGE";
  promotionStatus?: "ACTIVE" | "INACTIVE" | "EXPIRES_SOON" | "EXPIRED";
  promotionType?: "FUNDRAISER" | "PARTNER";
  startDate: Date;
  updatedAt: Date;
};
