import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { USERSIMAGE_TITLE_FIELD } from "../usersImage/UsersImageTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="UserRole"
          target="usersUuid"
          label="UserRoles"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <BooleanField
              label="Email Notification"
              source="emailNotification"
            />
            <BooleanField label="Enabled" source="enabled" />
            <TextField label="ID" source="id" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
