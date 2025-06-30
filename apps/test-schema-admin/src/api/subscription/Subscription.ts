import { UserRole } from "../userRole/UserRole";

export type Subscription = {
  access: boolean;
  alt: string;
  createdAt: Date;
  id: string;
  image: string;
  updatedAt: Date;
  userRoles?: UserRole | null;
};
