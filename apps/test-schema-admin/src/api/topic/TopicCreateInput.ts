import { FundraiserCreateNestedManyWithoutTopicsInput } from "./FundraiserCreateNestedManyWithoutTopicsInput";

export type TopicCreateInput = {
  fundraisers?: FundraiserCreateNestedManyWithoutTopicsInput;
  name: string;
};
