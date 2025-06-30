import { OrdersStatus as TOrdersStatus } from "../api/ordersStatus/OrdersStatus";

export const ORDERSSTATUS_TITLE_FIELD = "name";

export const OrdersStatusTitle = (record: TOrdersStatus): string => {
  return record.name?.toString() || String(record.id);
};
