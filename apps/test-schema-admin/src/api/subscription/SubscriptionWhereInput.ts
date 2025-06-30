import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type SubscriptionWhereInput = {
  access?: BooleanFilter;
  alt?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  image?: StringFilter;
  updatedAt?: DateTimeFilter;
  userRoles?: UserRoleWhereUniqueInput;
};
