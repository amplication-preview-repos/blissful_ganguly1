import { Promotion } from "../promotion/Promotion";

export type PromotionsImage = {
  createdAt: Date;
  id: string;
  name: string;
  path: string;
  promotions?: Array<Promotion>;
  updatedAt: Date;
};
