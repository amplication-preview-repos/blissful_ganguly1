import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { FundraiserListRelationFilter } from "../fundraiser/FundraiserListRelationFilter";

export type FundraisersImageWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringFilter;
  fundraisers?: FundraiserListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  path?: StringFilter;
  theme?: StringFilter;
  updatedAt?: DateTimeFilter;
};
