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
  BooleanField,
} from "react-admin";

import { FUNDRAISERSIMAGE_TITLE_FIELD } from "./FundraisersImageTitle";
import { FUNDRAISERSSTATUS_TITLE_FIELD } from "../fundraisersStatus/FundraisersStatusTitle";
import { TOPIC_TITLE_FIELD } from "../topic/TopicTitle";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const FundraisersImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Path" source="path" />
        <TextField label="Theme" source="theme" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Fundraiser"
          target="imageUuid"
          label="Fundraisers"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="End Date" source="endDate" />
            <ReferenceField
              label="Fundraisersimages"
              source="fundraisersimage.id"
              reference="FundraisersImage"
            >
              <TextField source={FUNDRAISERSIMAGE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Fundraisersstatus"
              source="fundraisersstatus.id"
              reference="FundraisersStatus"
            >
              <TextField source={FUNDRAISERSSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Link" source="link" />
            <TextField label="Postcode" source="postcode" />
            <TextField label="Start Date" source="startDate" />
            <BooleanField label="Subscribed" source="subscribed" />
            <TextField label="Suburb" source="suburb" />
            <TextField label="Target" source="target" />
            <TextField label="Title" source="title" />
            <TextField label="Topic" source="topic" />
            <ReferenceField label="Topics" source="topic.id" reference="Topic">
              <TextField source={TOPIC_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="User Roles"
              source="userrole.id"
              reference="UserRole"
            >
              <TextField source={USERROLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Roles Fundraisers Supplier Uuid To User Roles"
              source="userrole.id"
              reference="UserRole"
            >
              <TextField source={USERROLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
