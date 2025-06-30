import { FundraiserWhereUniqueInput } from "../fundraiser/FundraiserWhereUniqueInput";
import { FundraisersStatusWhereUniqueInput } from "../fundraisersStatus/FundraisersStatusWhereUniqueInput";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type FundraisersCustomerCreateInput = {
  fundraiser?: FundraiserWhereUniqueInput | null;
  fundraisersStatus?: FundraisersStatusWhereUniqueInput | null;
  userRoles?: UserRoleWhereUniqueInput | null;
};
