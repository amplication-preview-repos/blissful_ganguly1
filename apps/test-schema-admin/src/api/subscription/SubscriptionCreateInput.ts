import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type SubscriptionCreateInput = {
  access: boolean;
  alt: string;
  image: string;
  userRoles?: UserRoleWhereUniqueInput | null;
};
