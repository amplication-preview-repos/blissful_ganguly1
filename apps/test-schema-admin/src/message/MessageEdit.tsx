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

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Channel" source="channel" />
        <TextInput label="Channel Uuid" source="channelUuid" />
        <TextInput label="Email" source="email" />
        <BooleanInput label="Is Private" source="isPrivate" />
        <BooleanInput label="Is Read" source="isRead" />
        <TextInput label="Text" source="text" />
        <TextInput label="User Name" source="userName" />
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
