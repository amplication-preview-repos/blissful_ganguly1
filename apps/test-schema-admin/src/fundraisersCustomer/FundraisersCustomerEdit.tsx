import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FundraiserTitle } from "../fundraiser/FundraiserTitle";
import { FundraisersStatusTitle } from "../fundraisersStatus/FundraisersStatusTitle";
import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const FundraisersCustomerEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
