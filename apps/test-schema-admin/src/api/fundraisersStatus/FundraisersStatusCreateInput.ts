import { FundraiserCreateNestedManyWithoutFundraisersStatusesInput } from "./FundraiserCreateNestedManyWithoutFundraisersStatusesInput";
import { FundraisersCustomerCreateNestedManyWithoutFundraisersStatusesInput } from "./FundraisersCustomerCreateNestedManyWithoutFundraisersStatusesInput";

export type FundraisersStatusCreateInput = {
  fundraiser?: FundraiserCreateNestedManyWithoutFundraisersStatusesInput;
  fundraisercustomers?: FundraisersCustomerCreateNestedManyWithoutFundraisersStatusesInput;
  name: string;
  sequence: number;
  status: string;
};
