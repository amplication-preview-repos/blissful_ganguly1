import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="Active" source="active" />
        <TextField
          label="Adjusted Supplier Price"
          source="adjustedSupplierPrice"
        />
        <TextField label="Alcohol" source="alcohol" />
        <BooleanField label="Approved" source="approved" />
        <BooleanField label="Archived" source="archived" />
        <TextField label="Case Size" source="caseSize" />
        <TextField label="Closure" source="closure" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Fundraiser Uuid" source="fundraiserUuid" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Max Price" source="maxPrice" />
        <TextField label="Max Qty" source="maxQty" />
        <TextField label="Min Price" source="minPrice" />
        <TextField label="Min Qty" source="minQty" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Producer" source="producer" />
        <TextField label="Region" source="region" />
        <TextField label="Sku" source="sku" />
        <TextField label="State" source="state" />
        <TextField label="Status" source="status" />
        <TextField label="Stock" source="stock" />
        <TextField label="Stock Alert" source="stockAlert" />
        <TextField label="Stockact" source="stockact" />
        <TextField label="Stocknsw" source="stocknsw" />
        <TextField label="Stocknt" source="stocknt" />
        <TextField label="Stockqld" source="stockqld" />
        <TextField label="Stocksa" source="stocksa" />
        <TextField label="Stocktas" source="stocktas" />
        <TextField label="Stockvic" source="stockvic" />
        <TextField label="Stockwa" source="stockwa" />
        <TextField label="Supplier Price" source="supplierPrice" />
        <BooleanField label="Touched" source="touched" />
        <TextField label="Type Field" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="User Roles"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Uuid" source="uuid" />
        <TextField label="Varietal" source="varietal" />
        <TextField label="Vintage" source="vintage" />
        <TextField label="Volume" source="volume" />
        <TextField label="Wholesale Price" source="wholesalePrice" />
        <TextField label="Winemaker" source="winemaker" />{" "}
      </Datagrid>
    </List>
  );
};
