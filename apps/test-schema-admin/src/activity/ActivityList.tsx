import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const ActivityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Activities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Activity Status" source="activityStatus" />
        <TextField label="Assigned" source="assigned" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="dueDate" label="Due Date" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Link" source="link" />
        <TextField label="Link Drawer" source="linkDrawer" />
        <TextField label="Link Name" source="linkName" />
        <TextField label="Link Uuid" source="linkUuid" />
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
