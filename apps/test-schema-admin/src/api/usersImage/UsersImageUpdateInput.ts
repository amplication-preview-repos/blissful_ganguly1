import { UserUpdateManyWithoutUsersImagesInput } from "./UserUpdateManyWithoutUsersImagesInput";

export type UsersImageUpdateInput = {
  name?: string;
  path?: string;
  users?: UserUpdateManyWithoutUsersImagesInput;
};
