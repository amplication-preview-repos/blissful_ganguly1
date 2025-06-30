import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const MessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Messages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
