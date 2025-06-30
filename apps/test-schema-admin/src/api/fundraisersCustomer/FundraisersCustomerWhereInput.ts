import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FundraiserWhereUniqueInput } from "../fundraiser/FundraiserWhereUniqueInput";
import { FundraisersStatusWhereUniqueInput } from "../fundraisersStatus/FundraisersStatusWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type FundraisersCustomerWhereInput = {
  createdAt?: DateTimeFilter;
  fundraiser?: FundraiserWhereUniqueInput;
  fundraisersStatus?: FundraisersStatusWhereUniqueInput;
  id?: StringFilter;
  updatedAt?: DateTimeFilter;
  userRoles?: UserRoleWhereUniqueInput;
};
