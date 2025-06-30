import { InputJsonValue } from "../../types";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type ActivityCreateInput = {
  activityStatus: "INCOMPLETE" | "OVERDUE" | "EXPIRES_SOON" | "COMPLETED";
  assigned?: InputJsonValue;
  email: string;
  image?: string | null;
  link?: string | null;
  linkDrawer?: string | null;
  linkName?: string | null;
  linkUuid?: string | null;
  text: string;
  userName: string;
  userRoles?: UserRoleWhereUniqueInput | null;
};
