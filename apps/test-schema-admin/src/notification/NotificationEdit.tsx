import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
