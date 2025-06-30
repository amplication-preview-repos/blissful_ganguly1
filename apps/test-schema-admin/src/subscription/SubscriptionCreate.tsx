import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Access" source="access" />
        <TextInput label="Alt" source="alt" />
        <TextInput label="Image" source="image" />
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
