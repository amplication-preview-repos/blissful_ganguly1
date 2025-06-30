import { PromotionsImageWhereInput } from "./PromotionsImageWhereInput";
import { PromotionsImageOrderByInput } from "./PromotionsImageOrderByInput";

export type PromotionsImageFindManyArgs = {
  where?: PromotionsImageWhereInput;
  orderBy?: Array<PromotionsImageOrderByInput>;
  skip?: number;
  take?: number;
};
