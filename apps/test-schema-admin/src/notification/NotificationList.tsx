import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const NotificationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Notifications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <BooleanField label="Is Read" source="isRead" />
        <TextField label="Link" source="link" />
        <TextField label="Link Name" source="linkName" />
        <TextField label="Name" source="name" />
        <TextField label="Target" source="target" />
        <TextField label="Text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
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
