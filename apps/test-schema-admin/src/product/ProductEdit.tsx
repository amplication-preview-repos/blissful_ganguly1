import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FundraisersProductTitle } from "../fundraisersProduct/FundraisersProductTitle";
import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <NumberInput
          label="Adjusted Supplier Price"
          source="adjustedSupplierPrice"
        />
        <NumberInput step={1} label="Alcohol" source="alcohol" />
        <BooleanInput label="Approved" source="approved" />
        <BooleanInput label="Archived" source="archived" />
        <NumberInput step={1} label="Case Size" source="caseSize" />
        <TextInput label="Closure" source="closure" />
        <TextInput label="Country" source="country" />
        <TextInput label="Description" source="description" />
        <TextInput label="Fundraiser Uuid" source="fundraiserUuid" />
        <ReferenceArrayInput
          source="fundraisersProducts"
          reference="FundraisersProduct"
        >
          <SelectArrayInput
            optionText={FundraisersProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Image" source="image" />
        <NumberInput label="Max Price" source="maxPrice" />
        <NumberInput step={1} label="Max Qty" source="maxQty" />
        <NumberInput label="Min Price" source="minPrice" />
        <NumberInput step={1} label="Min Qty" source="minQty" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Producer" source="producer" />
        <TextInput label="Region" source="region" />
        <TextInput label="Sku" source="sku" />
        <TextInput label="State" source="state" />
        <TextInput label="Status" source="status" />
        <NumberInput step={1} label="Stock" source="stock" />
        <NumberInput step={1} label="Stock Alert" source="stockAlert" />
        <NumberInput step={1} label="Stockact" source="stockact" />
        <NumberInput step={1} label="Stocknsw" source="stocknsw" />
        <NumberInput step={1} label="Stocknt" source="stocknt" />
        <NumberInput step={1} label="Stockqld" source="stockqld" />
        <NumberInput step={1} label="Stocksa" source="stocksa" />
        <NumberInput step={1} label="Stocktas" source="stocktas" />
        <NumberInput step={1} label="Stockvic" source="stockvic" />
        <NumberInput step={1} label="Stockwa" source="stockwa" />
        <NumberInput label="Supplier Price" source="supplierPrice" />
        <BooleanInput label="Touched" source="touched" />
        <TextInput label="Type Field" source="typeField" />
        <ReferenceInput
          source="userRoles.id"
          reference="UserRole"
          label="User Roles"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
        <TextInput label="Uuid" source="uuid" />
        <TextInput label="Varietal" source="varietal" />
        <TextInput label="Vintage" source="vintage" />
        <NumberInput step={1} label="Volume" source="volume" />
        <NumberInput label="Wholesale Price" source="wholesalePrice" />
        <TextInput label="Winemaker" source="winemaker" />
      </SimpleForm>
    </Edit>
  );
};
