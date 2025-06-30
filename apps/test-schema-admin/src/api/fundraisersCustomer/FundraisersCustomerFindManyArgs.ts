import { FundraisersCustomerWhereInput } from "./FundraisersCustomerWhereInput";
import { FundraisersCustomerOrderByInput } from "./FundraisersCustomerOrderByInput";

export type FundraisersCustomerFindManyArgs = {
  where?: FundraisersCustomerWhereInput;
  orderBy?: Array<FundraisersCustomerOrderByInput>;
  skip?: number;
  take?: number;
};
