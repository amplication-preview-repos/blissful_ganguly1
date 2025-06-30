import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Image" source="image" />
        <BooleanInput label="Is Read" source="isRead" />
        <TextInput label="Link" source="link" />
        <TextInput label="Link Name" source="linkName" />
        <TextInput label="Name" source="name" />
        <TextInput label="Target" source="target" />
        <TextInput label="Text" source="text" />
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
