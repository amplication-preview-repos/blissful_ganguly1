import { UsersImage as TUsersImage } from "../api/usersImage/UsersImage";

export const USERSIMAGE_TITLE_FIELD = "name";

export const UsersImageTitle = (record: TUsersImage): string => {
  return record.name?.toString() || String(record.id);
};
