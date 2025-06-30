import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const OrdersProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Case Size" source="caseSize" />
        <NumberInput label="Fundraiser Price" source="fundraiserPrice" />
        <TextInput label="Image" source="image" />
        <NumberInput step={1} label="Max Qty" source="maxQty" />
        <NumberInput step={1} label="Min Qty" source="minQty" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
        <TextInput label="Product Uuid" source="productUuid" />
        <NumberInput label="Profit" source="profit" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <TextInput label="Sku" source="sku" />
        <TextInput label="Supplier Uuid" source="supplierUuid" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
