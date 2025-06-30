import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "accountName";

export const UserTitle = (record: TUser): string => {
  return record.accountName?.toString() || String(record.id);
};
