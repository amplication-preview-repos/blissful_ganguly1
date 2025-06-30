import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { CATEGORIESIMAGE_TITLE_FIELD } from "./CategoriesImageTitle";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const CategoriesImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Path" source="path" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Category"
          target="imageUuid"
          label="Categories"
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
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
