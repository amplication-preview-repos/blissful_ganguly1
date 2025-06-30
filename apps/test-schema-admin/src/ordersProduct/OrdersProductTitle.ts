import { OrdersProduct as TOrdersProduct } from "../api/ordersProduct/OrdersProduct";

export const ORDERSPRODUCT_TITLE_FIELD = "name";

export const OrdersProductTitle = (record: TOrdersProduct): string => {
  return record.name?.toString() || String(record.id);
};
