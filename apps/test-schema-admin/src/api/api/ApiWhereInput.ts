import { DateTimeFilter } from "../../util/DateTimeFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type ApiWhereInput = {
  createdAt?: DateTimeFilter;
  data?: JsonFilter;
  id?: IntFilter;
  subscriptionUuid?: StringFilter;
  updatedAt?: DateTimeFilter;
};
