import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Assigned" source="assigned" />
        <TextField label="Channel" source="channel" />
        <TextField label="Channel Uuid" source="channelUuid" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Private" source="isPrivate" />
        <BooleanField label="Is Read" source="isRead" />
        <TextField label="Text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User Name" source="userName" />
        <ReferenceField
          label="User Roles"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
