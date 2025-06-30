import { FundraiserUpdateManyWithoutFundraisersStatusesInput } from "./FundraiserUpdateManyWithoutFundraisersStatusesInput";
import { FundraisersCustomerUpdateManyWithoutFundraisersStatusesInput } from "./FundraisersCustomerUpdateManyWithoutFundraisersStatusesInput";

export type FundraisersStatusUpdateInput = {
  fundraiser?: FundraiserUpdateManyWithoutFundraisersStatusesInput;
  fundraisercustomers?: FundraisersCustomerUpdateManyWithoutFundraisersStatusesInput;
  name?: string;
  sequence?: number;
  status?: string;
};
