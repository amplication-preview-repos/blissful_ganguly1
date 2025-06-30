import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { CategoriesProductTitle } from "../categoriesProduct/CategoriesProductTitle";
import { CategoriesImageTitle } from "../categoriesImage/CategoriesImageTitle";
import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="categoriesproducts"
          reference="CategoriesProduct"
        >
          <SelectArrayInput
            optionText={CategoriesProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <ReferenceInput
          source="image.id"
          reference="CategoriesImage"
          label="Image"
        >
          <SelectInput optionText={CategoriesImageTitle} />
        </ReferenceInput>
        <BooleanInput label="Quick Starter" source="quickStarter" />
        <TextInput label="Title" source="title" />
        <ReferenceInput
          source="userRoles.id"
          reference="UserRole"
          label="User Roles"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
