import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const ActivityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="activityStatus"
          label="Activity Status"
          choices={[
            { label: "INCOMPLETE", value: "INCOMPLETE" },
            { label: "OVERDUE", value: "OVERDUE" },
            { label: "EXPIRES_SOON", value: "EXPIRES_SOON" },
            { label: "COMPLETED", value: "COMPLETED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <div />
        <TextInput label="Email" source="email" />
        <TextInput label="Image" source="image" />
        <TextInput label="Link" source="link" />
        <TextInput label="Link Drawer" source="linkDrawer" />
        <TextInput label="Link Name" source="linkName" />
        <TextInput label="Link Uuid" source="linkUuid" />
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
    </Create>
  );
};
