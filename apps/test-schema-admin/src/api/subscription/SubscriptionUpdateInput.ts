import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type SubscriptionUpdateInput = {
  access?: boolean;
  alt?: string;
  image?: string;
  userRoles?: UserRoleWhereUniqueInput | null;
};
