import { UsersImageWhereInput } from "./UsersImageWhereInput";
import { UsersImageOrderByInput } from "./UsersImageOrderByInput";

export type UsersImageFindManyArgs = {
  where?: UsersImageWhereInput;
  orderBy?: Array<UsersImageOrderByInput>;
  skip?: number;
  take?: number;
};
