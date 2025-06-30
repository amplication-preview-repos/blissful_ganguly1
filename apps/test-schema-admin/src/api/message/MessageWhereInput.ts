import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type MessageWhereInput = {
  assigned?: JsonFilter;
  channel?: StringFilter;
  channelUuid?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  id?: StringFilter;
  isPrivate?: BooleanFilter;
  isRead?: BooleanFilter;
  text?: StringFilter;
  updatedAt?: DateTimeFilter;
  userName?: StringFilter;
  userRoles?: UserRoleWhereUniqueInput;
};
