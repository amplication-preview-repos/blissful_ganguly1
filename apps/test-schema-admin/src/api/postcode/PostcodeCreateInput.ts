import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type PostcodeCreateInput = {
  code: string;
  metro: boolean;
  userRoles?: UserRoleWhereUniqueInput | null;
};
