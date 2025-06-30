import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CATEGORIESIMAGE_TITLE_FIELD } from "../categoriesImage/CategoriesImageTitle";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const CategoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Categories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Image"
          source="categoriesimage.id"
          reference="CategoriesImage"
        >
          <TextField source={CATEGORIESIMAGE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Quick Starter" source="quickStarter" />
        <TextField label="Title" source="title" />
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
