import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FundraiserWhereUniqueInput } from "../fundraiser/FundraiserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PromotionWhereUniqueInput } from "../promotion/PromotionWhereUniqueInput";

export type FundraisersPromotionWhereInput = {
  createdAt?: DateTimeFilter;
  fundraisers?: FundraiserWhereUniqueInput;
  id?: StringFilter;
  promotions?: PromotionWhereUniqueInput;
  source?: "PARTNER" | "FUNDRAISER";
  status?: "ACTIVE" | "INACTIVE" | "EXPIRES_SOON" | "EXPIRED";
  updatedAt?: DateTimeFilter;
};
