import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FundraiserTitle } from "../fundraiser/FundraiserTitle";
import { PromotionTitle } from "../promotion/PromotionTitle";

export const FundraisersPromotionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="fundraisers.id"
          reference="Fundraiser"
          label="Fundraisers"
        >
          <SelectInput optionText={FundraiserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="promotions.id"
          reference="Promotion"
          label="Promotions"
        >
          <SelectInput optionText={PromotionTitle} />
        </ReferenceInput>
        <SelectInput
          source="source"
          label="Source"
          choices={[
            { label: "PARTNER", value: "PARTNER" },
            { label: "FUNDRAISER", value: "FUNDRAISER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "ACTIVE", value: "ACTIVE" },
            { label: "INACTIVE", value: "INACTIVE" },
            { label: "EXPIRES_SOON", value: "EXPIRES_SOON" },
            { label: "EXPIRED", value: "EXPIRED" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
