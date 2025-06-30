import { UserRole } from "../userRole/UserRole";

export type Notification = {
  createdAt: Date;
  id: string;
  image: string | null;
  isRead: boolean;
  link: string | null;
  linkName: string | null;
  name: string;
  target: string | null;
  text: string;
  updatedAt: Date;
  userRoles?: UserRole | null;
};
