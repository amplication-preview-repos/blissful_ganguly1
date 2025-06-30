import { User } from "../user/User";

export type UsersImage = {
  createdAt: Date;
  id: string;
  name: string;
  path: string;
  updatedAt: Date;
  users?: Array<User>;
};
