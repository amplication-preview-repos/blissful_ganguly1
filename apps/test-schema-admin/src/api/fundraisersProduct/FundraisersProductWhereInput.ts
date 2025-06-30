import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { FundraiserWhereUniqueInput } from "../fundraiser/FundraiserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type FundraisersProductWhereInput = {
  createdAt?: DateTimeFilter;
  discount?: IntFilter;
  fundraiserPrice?: FloatFilter;
  fundraiserPromotionUuid?: StringFilter;
  fundraisers?: FundraiserWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  productPrice?: FloatFilter;
  promotionUuid?: StringFilter;
  updatedAt?: DateTimeFilter;
};
