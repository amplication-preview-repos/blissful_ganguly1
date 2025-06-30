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
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const OrdersProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"OrdersProducts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Case Size" source="caseSize" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fundraiser Price" source="fundraiserPrice" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Max Qty" source="maxQty" />
        <TextField label="Min Qty" source="minQty" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Price" source="price" />
        <TextField label="Product Uuid" source="productUuid" />
        <TextField label="Profit" source="profit" />
        <TextField label="Quantity" source="quantity" />
        <TextField label="Sku" source="sku" />
        <TextField label="Supplier Uuid" source="supplierUuid" />
        <TextField label="Type Field" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
