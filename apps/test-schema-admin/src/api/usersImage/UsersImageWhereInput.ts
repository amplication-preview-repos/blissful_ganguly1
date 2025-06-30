import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type UsersImageWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  path?: StringFilter;
  updatedAt?: DateTimeFilter;
  users?: UserListRelationFilter;
};
