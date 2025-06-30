import { UserRole } from "../userRole/UserRole";

export type Postcode = {
  code: string;
  createdAt: Date;
  id: string;
  metro: boolean;
  updatedAt: Date;
  userRoles?: UserRole | null;
};
