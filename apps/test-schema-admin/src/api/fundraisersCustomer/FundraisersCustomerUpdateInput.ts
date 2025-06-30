import { FundraiserWhereUniqueInput } from "../fundraiser/FundraiserWhereUniqueInput";
import { FundraisersStatusWhereUniqueInput } from "../fundraisersStatus/FundraisersStatusWhereUniqueInput";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type FundraisersCustomerUpdateInput = {
  fundraiser?: FundraiserWhereUniqueInput | null;
  fundraisersStatus?: FundraisersStatusWhereUniqueInput | null;
  userRoles?: UserRoleWhereUniqueInput | null;
};
