import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type OrdersStatusWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
  sequence?: IntFilter;
  status?: StringFilter;
};
