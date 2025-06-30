import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type NotificationCreateInput = {
  image?: string | null;
  isRead: boolean;
  link?: string | null;
  linkName?: string | null;
  name: string;
  target?: string | null;
  text: string;
  userRoles?: UserRoleWhereUniqueInput | null;
};
