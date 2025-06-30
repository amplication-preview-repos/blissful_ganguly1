import { FundraiserWhereUniqueInput } from "../fundraiser/FundraiserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type FundraisersProductCreateInput = {
  discount: number;
  fundraiserPrice: number;
  fundraiserPromotionUuid: string;
  fundraisers: FundraiserWhereUniqueInput;
  product?: ProductWhereUniqueInput | null;
  productPrice: number;
  promotionUuid: string;
};
