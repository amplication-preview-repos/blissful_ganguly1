import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FundraiserListRelationFilter } from "../fundraiser/FundraiserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TopicWhereInput = {
  createdAt?: DateTimeFilter;
  fundraisers?: FundraiserListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  updatedAt?: DateTimeFilter;
};
