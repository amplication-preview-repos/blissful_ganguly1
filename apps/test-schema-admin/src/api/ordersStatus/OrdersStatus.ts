import { Order } from "../order/Order";

export type OrdersStatus = {
  id: string;
  name: string;
  orders?: Array<Order>;
  sequence: number;
  status: string;
};
