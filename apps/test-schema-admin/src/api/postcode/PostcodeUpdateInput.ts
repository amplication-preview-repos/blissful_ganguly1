import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type PostcodeUpdateInput = {
  code?: string;
  metro?: boolean;
  userRoles?: UserRoleWhereUniqueInput | null;
};
