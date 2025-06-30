import { Fundraiser } from "../fundraiser/Fundraiser";
import { FundraisersCustomer } from "../fundraisersCustomer/FundraisersCustomer";

export type FundraisersStatus = {
  fundraiser?: Array<Fundraiser>;
  fundraisercustomers?: Array<FundraisersCustomer>;
  id: string;
  name: string;
  sequence: number;
  status: string;
};
