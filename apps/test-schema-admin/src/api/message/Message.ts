import { JsonValue } from "type-fest";
import { UserRole } from "../userRole/UserRole";

export type Message = {
  assigned: JsonValue;
  channel: string;
  channelUuid: string | null;
  createdAt: Date;
  email: string;
  id: string;
  isPrivate: boolean;
  isRead: boolean;
  text: string;
  updatedAt: Date;
  userName: string;
  userRoles?: UserRole | null;
};
