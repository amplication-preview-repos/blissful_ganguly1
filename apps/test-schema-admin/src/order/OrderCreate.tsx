import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FundraiserTitle } from "../fundraiser/FundraiserTitle";
import { OrdersProductTitle } from "../ordersProduct/OrdersProductTitle";
import { OrdersStatusTitle } from "../ordersStatus/OrdersStatusTitle";
import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Additional" source="additional" />
        <TextInput label="Address" source="address" />
        <BooleanInput label="Atl" source="atl" />
        <TextInput label="Billing Address" source="billingAddress" />
        <TextInput label="Billing Country" source="billingCountry" />
        <TextInput label="Billing Postcode" source="billingPostcode" />
        <TextInput label="Billing State" source="billingState" />
        <TextInput label="Billing Suburb" source="billingSuburb" />
        <TextInput label="Country" source="country" />
        <TextInput label="Delivery Address" source="deliveryAddress" />
        <TextInput label="Delivery Country" source="deliveryCountry" />
        <TextInput label="Delivery Postcode" source="deliveryPostcode" />
        <TextInput label="Delivery State" source="deliveryState" />
        <TextInput label="Delivery Suburb" source="deliverySuburb" />
        <TextInput label="Email" source="email" />
        <TextInput label="Fullname" source="fullname" />
        <ReferenceInput
          source="fundraiser.id"
          reference="Fundraiser"
          label="Fundraiser"
        >
          <SelectInput optionText={FundraiserTitle} />
        </ReferenceInput>
        <NumberInput label="Fundraiser Total" source="fundraiserTotal" />
        <NumberInput step={1} label="Order Id" source="orderId" />
        <NumberInput label="Order Total" source="orderTotal" />
        <ReferenceArrayInput source="ordersproducts" reference="OrdersProduct">
          <SelectArrayInput
            optionText={OrdersProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="ordersstatus.id"
          reference="OrdersStatus"
          label="Ordersstatus"
        >
          <SelectInput optionText={OrdersStatusTitle} />
        </ReferenceInput>
        <TextInput label="Phone" source="phone" />
        <TextInput label="Postcode" source="postcode" />
        <NumberInput label="Profit" source="profit" />
        <NumberInput label="Shipping Total" source="shippingTotal" />
        <TextInput label="State" source="state" />
        <TextInput label="Suburb" source="suburb" />
        <ReferenceInput
          source="supplier.id"
          reference="UserRole"
          label="Supplier"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
        <TextInput label="Support Notes" source="supportNotes" />
        <TextInput label="Tracking" source="tracking" />
        <ReferenceInput
          source="userRoles.id"
          reference="UserRole"
          label="User Roles"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
