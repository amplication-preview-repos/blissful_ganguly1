import { OrdersStatusWhereInput } from "./OrdersStatusWhereInput";
import { OrdersStatusOrderByInput } from "./OrdersStatusOrderByInput";

export type OrdersStatusFindManyArgs = {
  where?: OrdersStatusWhereInput;
  orderBy?: Array<OrdersStatusOrderByInput>;
  skip?: number;
  take?: number;
};
