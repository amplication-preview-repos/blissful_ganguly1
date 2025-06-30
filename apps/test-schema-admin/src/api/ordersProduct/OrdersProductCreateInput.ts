import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrdersProductCreateInput = {
  caseSize?: number | null;
  fundraiserPrice?: number | null;
  image: string;
  maxQty?: number | null;
  minQty?: number | null;
  name: string;
  order: OrderWhereUniqueInput;
  price?: number | null;
  productUuid: string;
  profit?: number | null;
  quantity: number;
  sku?: string | null;
  supplierUuid: string;
  typeField?: string | null;
};
