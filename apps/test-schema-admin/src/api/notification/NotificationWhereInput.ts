import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type NotificationWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  isRead?: BooleanFilter;
  link?: StringNullableFilter;
  linkName?: StringNullableFilter;
  name?: StringFilter;
  target?: StringNullableFilter;
  text?: StringFilter;
  updatedAt?: DateTimeFilter;
  userRoles?: UserRoleWhereUniqueInput;
};
