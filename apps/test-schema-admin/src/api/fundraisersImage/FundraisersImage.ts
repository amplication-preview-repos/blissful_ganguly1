import { Fundraiser } from "../fundraiser/Fundraiser";

export type FundraisersImage = {
  createdAt: Date;
  description: string;
  fundraisers?: Array<Fundraiser>;
  id: string;
  name: string;
  path: string;
  theme: string;
  updatedAt: Date;
};
