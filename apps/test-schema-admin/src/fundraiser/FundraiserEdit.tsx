import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { FundraisersPromotionTitle } from "../fundraisersPromotion/FundraisersPromotionTitle";
import { FundraisersCustomerTitle } from "../fundraisersCustomer/FundraisersCustomerTitle";
import { FundraisersImageTitle } from "../fundraisersImage/FundraisersImageTitle";
import { OrderTitle } from "../order/OrderTitle";
import { FundraisersProductTitle } from "../fundraisersProduct/FundraisersProductTitle";
import { FundraisersStatusTitle } from "../fundraisersStatus/FundraisersStatusTitle";
import { TopicTitle } from "../topic/TopicTitle";
import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const FundraiserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <DateTimeInput label="End Date" source="endDate" />
        <ReferenceArrayInput
          source="fundraisersPromotions"
          reference="FundraisersPromotion"
        >
          <SelectArrayInput
            optionText={FundraisersPromotionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fundraiserscustomers"
          reference="FundraisersCustomer"
        >
          <SelectArrayInput
            optionText={FundraisersCustomerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="fundraisersimages.id"
          reference="FundraisersImage"
          label="Fundraisersimages"
        >
          <SelectInput optionText={FundraisersImageTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="fundraisersorders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fundraisersproducts"
          reference="FundraisersProduct"
        >
          <SelectArrayInput
            optionText={FundraisersProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="fundraisersstatus.id"
          reference="FundraisersStatus"
          label="Fundraisersstatus"
        >
          <SelectInput optionText={FundraisersStatusTitle} />
        </ReferenceInput>
        <TextInput label="Image" source="image" />
        <TextInput label="Link" source="link" />
        <TextInput label="Postcode" source="postcode" />
        <DateTimeInput label="Start Date" source="startDate" />
        <BooleanInput label="Subscribed" source="subscribed" />
        <TextInput label="Suburb" source="suburb" />
        <NumberInput step={1} label="Target" source="target" />
        <TextInput label="Title" source="title" />
        <TextInput label="Topic" source="topic" />
        <ReferenceInput source="topics.id" reference="Topic" label="Topics">
          <SelectInput optionText={TopicTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userRoles.id"
          reference="UserRole"
          label="User Roles"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userRolesFundraisersSupplierUuidToUserRoles.id"
          reference="UserRole"
          label="User Roles Fundraisers Supplier Uuid To User Roles"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
