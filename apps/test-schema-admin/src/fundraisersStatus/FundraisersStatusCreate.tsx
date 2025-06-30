import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { FundraiserTitle } from "../fundraiser/FundraiserTitle";
import { FundraisersCustomerTitle } from "../fundraisersCustomer/FundraisersCustomerTitle";

export const FundraisersStatusCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="fundraiser" reference="Fundraiser">
          <SelectArrayInput
            optionText={FundraiserTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fundraisercustomers"
          reference="FundraisersCustomer"
        >
          <SelectArrayInput
            optionText={FundraisersCustomerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Sequence" source="sequence" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
