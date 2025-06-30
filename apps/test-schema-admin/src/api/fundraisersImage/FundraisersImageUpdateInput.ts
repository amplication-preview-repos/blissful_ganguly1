import { FundraiserUpdateManyWithoutFundraisersImagesInput } from "./FundraiserUpdateManyWithoutFundraisersImagesInput";

export type FundraisersImageUpdateInput = {
  description?: string;
  fundraisers?: FundraiserUpdateManyWithoutFundraisersImagesInput;
  name?: string;
  path?: string;
  theme?: string;
};
