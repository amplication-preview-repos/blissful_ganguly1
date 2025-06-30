import { FundraiserListRelationFilter } from "../fundraiser/FundraiserListRelationFilter";
import { FundraisersCustomerListRelationFilter } from "../fundraisersCustomer/FundraisersCustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type FundraisersStatusWhereInput = {
  fundraiser?: FundraiserListRelationFilter;
  fundraisercustomers?: FundraisersCustomerListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  sequence?: IntFilter;
  status?: StringFilter;
};
