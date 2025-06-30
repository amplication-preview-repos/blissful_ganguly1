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
} from "react-admin";

import { USERSIMAGE_TITLE_FIELD } from "./UsersImageTitle";

export const UsersImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Path" source="path" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="imageUuid" label="Users">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Account Bsb" source="accountBsb" />
            <TextField label="Account Name" source="accountName" />
            <TextField label="Account Number" source="accountNumber" />
            <TextField label="Address1" source="address1" />
            <TextField label="Address2" source="address2" />
            <TextField label="Biller Code" source="billerCode" />
            <TextField label="Biller Name" source="billerName" />
            <TextField label="Biller Ref" source="billerRef" />
            <TextField label="Business Name" source="businessName" />
            <TextField label="City" source="city" />
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Delivery Address" source="deliveryAddress" />
            <TextField label="Delivery Country" source="deliveryCountry" />
            <TextField label="Delivery Postcode" source="deliveryPostcode" />
            <TextField label="Delivery State" source="deliveryState" />
            <TextField label="Delivery Suburb" source="deliverySuburb" />
            <TextField label="Display Name" source="displayName" />
            <TextField label="Email" source="email" />
            <TextField label="First" source="first" />
            <TextField label="ID" source="id" />
            <TextField label="Initials" source="initials" />
            <TextField label="Last" source="last" />
            <TextField label="Phone" source="phone" />
            <TextField label="Postcode" source="postcode" />
            <TextField label="State" source="state" />
            <TextField label="Suburb" source="suburb" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Users Images"
              source="usersimage.id"
              reference="UsersImage"
            >
              <TextField source={USERSIMAGE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
