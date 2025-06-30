import { UserCreateNestedManyWithoutUsersImagesInput } from "./UserCreateNestedManyWithoutUsersImagesInput";

export type UsersImageCreateInput = {
  name: string;
  path: string;
  users?: UserCreateNestedManyWithoutUsersImagesInput;
};
