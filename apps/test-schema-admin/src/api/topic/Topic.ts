import { Fundraiser } from "../fundraiser/Fundraiser";

export type Topic = {
  createdAt: Date;
  fundraisers?: Array<Fundraiser>;
  id: string;
  name: string;
  updatedAt: Date;
};
