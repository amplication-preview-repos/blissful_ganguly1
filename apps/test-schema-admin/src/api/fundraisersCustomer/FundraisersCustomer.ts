import { Fundraiser } from "../fundraiser/Fundraiser";
import { FundraisersStatus } from "../fundraisersStatus/FundraisersStatus";
import { UserRole } from "../userRole/UserRole";

export type FundraisersCustomer = {
  createdAt: Date;
  fundraiser?: Fundraiser | null;
  fundraisersStatus?: FundraisersStatus | null;
  id: string;
  updatedAt: Date;
  userRoles?: UserRole | null;
};
