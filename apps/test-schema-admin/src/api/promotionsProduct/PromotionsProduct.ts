import { Promotion } from "../promotion/Promotion";

export type PromotionsProduct = {
  createdAt: Date;
  id: string;
  productUuid: string;
  promotion?: Promotion;
  updatedAt: Date;
};
