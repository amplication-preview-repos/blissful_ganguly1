import { FundraiserWhereUniqueInput } from "../fundraiser/FundraiserWhereUniqueInput";
import { PromotionWhereUniqueInput } from "../promotion/PromotionWhereUniqueInput";

export type FundraisersPromotionCreateInput = {
  fundraisers: FundraiserWhereUniqueInput;
  promotions: PromotionWhereUniqueInput;
  source: "PARTNER" | "FUNDRAISER";
  status: "ACTIVE" | "INACTIVE" | "EXPIRES_SOON" | "EXPIRED";
};
