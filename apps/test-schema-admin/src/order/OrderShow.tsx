import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";
import { ORDERSSTATUS_TITLE_FIELD } from "../ordersStatus/OrdersStatusTitle";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Additional" source="additional" />
        <TextField label="Address" source="address" />
        <BooleanField label="Atl" source="atl" />
        <TextField label="Billing Address" source="billingAddress" />
        <TextField label="Billing Country" source="billingCountry" />
        <TextField label="Billing Postcode" source="billingPostcode" />
        <TextField label="Billing State" source="billingState" />
        <TextField label="Billing Suburb" source="billingSuburb" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Delivery Address" source="deliveryAddress" />
        <TextField label="Delivery Country" source="deliveryCountry" />
        <TextField label="Delivery Postcode" source="deliveryPostcode" />
        <TextField label="Delivery State" source="deliveryState" />
        <TextField label="Delivery Suburb" source="deliverySuburb" />
        <TextField label="Email" source="email" />
        <TextField label="Fullname" source="fullname" />
        <ReferenceField
          label="Fundraiser"
          source="fundraiser.id"
          reference="Fundraiser"
        >
          <TextField source={FUNDRAISER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Fundraiser Total" source="fundraiserTotal" />
        <TextField label="ID" source="id" />
        <TextField label="Order Id" source="orderId" />
        <TextField label="Order Total" source="orderTotal" />
        <ReferenceField
          label="Ordersstatus"
          source="ordersstatus.id"
          reference="OrdersStatus"
        >
          <TextField source={ORDERSSTATUS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Phone" source="phone" />
        <TextField label="Postcode" source="postcode" />
        <TextField label="Profit" source="profit" />
        <TextField label="Shipping Total" source="shippingTotal" />
        <TextField label="State" source="state" />
        <TextField label="Suburb" source="suburb" />
        <ReferenceField
          label="Supplier"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Support Notes" source="supportNotes" />
        <TextField label="Tracking" source="tracking" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="User Roles"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="OrdersProduct"
          target="orderUuid"
          label="OrdersProducts"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
