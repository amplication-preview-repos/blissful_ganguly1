import { OrderCreateNestedManyWithoutOrdersStatusesInput } from "./OrderCreateNestedManyWithoutOrdersStatusesInput";

export type OrdersStatusCreateInput = {
  name: string;
  orders?: OrderCreateNestedManyWithoutOrdersStatusesInput;
  sequence: number;
  status: string;
};
