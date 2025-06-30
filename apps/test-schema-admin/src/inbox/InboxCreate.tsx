import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const InboxCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Body" source="body" />
        <TextInput label="Conversation Uuid" source="conversationUuid" />
        <NumberInput step={1} label="History" source="history" />
        <TextInput label="Image" source="image" />
        <ReferenceInput
          source="inboxReceiver.id"
          reference="UserRole"
          label="Inbox Receiver"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="inboxSender.id"
          reference="UserRole"
          label="Inbox Sender"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
        <BooleanInput label="Is Read" source="isRead" />
        <BooleanInput label="Is Reply" source="isReply" />
        <TextInput label="Sender Email" source="senderEmail" />
        <TextInput label="Sender Name" source="senderName" />
        <TextInput label="Subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};
