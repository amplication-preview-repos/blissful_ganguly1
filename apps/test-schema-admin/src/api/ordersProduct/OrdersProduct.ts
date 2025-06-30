import { Order } from "../order/Order";

export type OrdersProduct = {
  caseSize: number | null;
  createdAt: Date;
  fundraiserPrice: number | null;
  id: string;
  image: string;
  maxQty: number | null;
  minQty: number | null;
  name: string;
  order?: Order;
  price: number | null;
  productUuid: string;
  profit: number | null;
  quantity: number;
  sku: string | null;
  supplierUuid: string;
  typeField: string | null;
  updatedAt: Date;
};
