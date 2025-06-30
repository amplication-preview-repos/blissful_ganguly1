import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserRoleTitle } from "../userRole/UserRoleTitle";
import { UsersImageTitle } from "../usersImage/UsersImageTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Account Bsb" source="accountBsb" />
        <TextInput label="Account Name" source="accountName" />
        <TextInput label="Account Number" source="accountNumber" />
        <TextInput label="Address1" source="address1" />
        <TextInput label="Address2" source="address2" />
        <TextInput label="Biller Code" source="billerCode" />
        <TextInput label="Biller Name" source="billerName" />
        <TextInput label="Biller Ref" source="billerRef" />
        <TextInput label="Business Name" source="businessName" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="Delivery Address" source="deliveryAddress" />
        <TextInput label="Delivery Country" source="deliveryCountry" />
        <TextInput label="Delivery Postcode" source="deliveryPostcode" />
        <TextInput label="Delivery State" source="deliveryState" />
        <TextInput label="Delivery Suburb" source="deliverySuburb" />
        <TextInput label="Display Name" source="displayName" />
        <TextInput label="Email" source="email" />
        <TextInput label="First" source="first" />
        <TextInput label="Initials" source="initials" />
        <TextInput label="Last" source="last" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Postcode" source="postcode" />
        <TextInput label="State" source="state" />
        <TextInput label="Suburb" source="suburb" />
        <ReferenceArrayInput source="userroles" reference="UserRole">
          <SelectArrayInput
            optionText={UserRoleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="usersImages.id"
          reference="UsersImage"
          label="Users Images"
        >
          <SelectInput optionText={UsersImageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
