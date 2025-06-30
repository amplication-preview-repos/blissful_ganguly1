import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";
import { ORDERSSTATUS_TITLE_FIELD } from "../ordersStatus/OrdersStatusTitle";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Orders"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
