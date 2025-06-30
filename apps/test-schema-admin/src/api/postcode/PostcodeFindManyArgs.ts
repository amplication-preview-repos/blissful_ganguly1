import { PostcodeWhereInput } from "./PostcodeWhereInput";
import { PostcodeOrderByInput } from "./PostcodeOrderByInput";

export type PostcodeFindManyArgs = {
  where?: PostcodeWhereInput;
  orderBy?: Array<PostcodeOrderByInput>;
  skip?: number;
  take?: number;
};
