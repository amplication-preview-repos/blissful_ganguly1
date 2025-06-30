import { FundraiserCreateNestedManyWithoutFundraisersImagesInput } from "./FundraiserCreateNestedManyWithoutFundraisersImagesInput";

export type FundraisersImageCreateInput = {
  description: string;
  fundraisers?: FundraiserCreateNestedManyWithoutFundraisersImagesInput;
  name: string;
  path: string;
  theme: string;
};
