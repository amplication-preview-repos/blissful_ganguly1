import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FundraiserTitle } from "../fundraiser/FundraiserTitle";
import { FundraisersStatusTitle } from "../fundraisersStatus/FundraisersStatusTitle";
import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const FundraisersCustomerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="fundraiser.id"
          reference="Fundraiser"
          label="Fundraiser"
        >
          <SelectInput optionText={FundraiserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="fundraisersStatus.id"
          reference="FundraisersStatus"
          label="Fundraisers Status"
        >
          <SelectInput optionText={FundraisersStatusTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userRoles.id"
          reference="UserRole"
          label="User Roles"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
