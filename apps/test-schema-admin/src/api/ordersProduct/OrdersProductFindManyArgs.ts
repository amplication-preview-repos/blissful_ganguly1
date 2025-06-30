import { OrdersProductWhereInput } from "./OrdersProductWhereInput";
import { OrdersProductOrderByInput } from "./OrdersProductOrderByInput";

export type OrdersProductFindManyArgs = {
  where?: OrdersProductWhereInput;
  orderBy?: Array<OrdersProductOrderByInput>;
  skip?: number;
  take?: number;
};
