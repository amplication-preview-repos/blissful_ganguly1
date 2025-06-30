import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const InboxShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Body" source="body" />
        <TextField label="Conversation Uuid" source="conversationUuid" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="History" source="history" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <ReferenceField
          label="Inbox Receiver"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Inbox Sender"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Is Read" source="isRead" />
        <BooleanField label="Is Reply" source="isReply" />
        <TextField label="Sender Email" source="senderEmail" />
        <TextField label="Sender Name" source="senderName" />
        <TextField label="Subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
