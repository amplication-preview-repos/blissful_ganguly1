import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type PostcodeWhereInput = {
  code?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  metro?: BooleanFilter;
  updatedAt?: DateTimeFilter;
  userRoles?: UserRoleWhereUniqueInput;
};
