import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "fullname";

export const OrderTitle = (record: TOrder): string => {
  return record.fullname?.toString() || String(record.id);
};
