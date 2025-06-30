import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrdersProductWhereInput = {
  caseSize?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  fundraiserPrice?: FloatNullableFilter;
  id?: StringFilter;
  image?: StringFilter;
  maxQty?: IntNullableFilter;
  minQty?: IntNullableFilter;
  name?: StringFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
  productUuid?: StringFilter;
  profit?: FloatNullableFilter;
  quantity?: IntFilter;
  sku?: StringNullableFilter;
  supplierUuid?: StringFilter;
  typeField?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
