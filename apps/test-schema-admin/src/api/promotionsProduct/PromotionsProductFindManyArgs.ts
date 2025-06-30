import { PromotionsProductWhereInput } from "./PromotionsProductWhereInput";
import { PromotionsProductOrderByInput } from "./PromotionsProductOrderByInput";

export type PromotionsProductFindManyArgs = {
  where?: PromotionsProductWhereInput;
  orderBy?: Array<PromotionsProductOrderByInput>;
  skip?: number;
  take?: number;
};
