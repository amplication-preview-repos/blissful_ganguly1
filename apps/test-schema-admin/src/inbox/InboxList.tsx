import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const InboxList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Inboxes"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
