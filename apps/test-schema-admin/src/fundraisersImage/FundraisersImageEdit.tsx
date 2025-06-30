import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FundraiserTitle } from "../fundraiser/FundraiserTitle";

export const FundraisersImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <ReferenceArrayInput source="fundraisers" reference="Fundraiser">
          <SelectArrayInput
            optionText={FundraiserTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Path" source="path" />
        <TextInput label="Theme" source="theme" />
      </SimpleForm>
    </Edit>
  );
};
