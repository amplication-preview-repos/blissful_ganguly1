import { OrderUpdateManyWithoutOrdersStatusesInput } from "./OrderUpdateManyWithoutOrdersStatusesInput";

export type OrdersStatusUpdateInput = {
  name?: string;
  orders?: OrderUpdateManyWithoutOrdersStatusesInput;
  sequence?: number;
  status?: string;
};
