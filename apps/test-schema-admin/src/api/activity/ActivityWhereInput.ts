import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type ActivityWhereInput = {
  activityStatus?: "INCOMPLETE" | "OVERDUE" | "EXPIRES_SOON" | "COMPLETED";
  assigned?: JsonFilter;
  createdAt?: DateTimeFilter;
  dueDate?: DateTimeFilter;
  email?: StringFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  link?: StringNullableFilter;
  linkDrawer?: StringNullableFilter;
  linkName?: StringNullableFilter;
  linkUuid?: StringNullableFilter;
  text?: StringFilter;
  updatedAt?: DateTimeFilter;
  userName?: StringFilter;
  userRoles?: UserRoleWhereUniqueInput;
};
