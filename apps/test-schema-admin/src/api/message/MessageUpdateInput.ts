import { InputJsonValue } from "../../types";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type MessageUpdateInput = {
  assigned?: InputJsonValue;
  channel?: string;
  channelUuid?: string | null;
  email?: string;
  isPrivate?: boolean;
  isRead?: boolean;
  text?: string;
  userName?: string;
  userRoles?: UserRoleWhereUniqueInput | null;
};
