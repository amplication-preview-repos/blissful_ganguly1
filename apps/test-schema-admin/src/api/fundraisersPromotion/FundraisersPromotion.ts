import { Fundraiser } from "../fundraiser/Fundraiser";
import { Promotion } from "../promotion/Promotion";

export type FundraisersPromotion = {
  createdAt: Date;
  fundraisers?: Fundraiser;
  id: string;
  promotions?: Promotion;
  source?: "PARTNER" | "FUNDRAISER";
  status?: "ACTIVE" | "INACTIVE" | "EXPIRES_SOON" | "EXPIRED";
  updatedAt: Date;
};
