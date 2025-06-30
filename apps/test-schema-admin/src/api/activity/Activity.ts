import { JsonValue } from "type-fest";
import { UserRole } from "../userRole/UserRole";

export type Activity = {
  activityStatus?: "INCOMPLETE" | "OVERDUE" | "EXPIRES_SOON" | "COMPLETED";
  assigned: JsonValue;
  createdAt: Date;
  dueDate: Date;
  email: string;
  id: string;
  image: string | null;
  link: string | null;
  linkDrawer: string | null;
  linkName: string | null;
  linkUuid: string | null;
  text: string;
  updatedAt: Date;
  userName: string;
  userRoles?: UserRole | null;
};
