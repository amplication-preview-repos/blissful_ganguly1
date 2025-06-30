import { FundraisersProductWhereInput } from "./FundraisersProductWhereInput";
import { FundraisersProductOrderByInput } from "./FundraisersProductOrderByInput";

export type FundraisersProductFindManyArgs = {
  where?: FundraisersProductWhereInput;
  orderBy?: Array<FundraisersProductOrderByInput>;
  skip?: number;
  take?: number;
};
