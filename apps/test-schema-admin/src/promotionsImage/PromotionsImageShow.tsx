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

import { PROMOTIONSIMAGE_TITLE_FIELD } from "./PromotionsImageTitle";

export const PromotionsImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Path" source="path" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Promotion"
          target="imageUuid"
          label="Promotions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Discount" source="discount" />
            <DateField source="endDate" label="End Date" />
            <TextField label="Excerpt" source="excerpt" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Image"
              source="promotionsimage.id"
              reference="PromotionsImage"
            >
              <TextField source={PROMOTIONSIMAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Max" source="max" />
            <TextField label="Min" source="min" />
            <TextField label="Name" source="name" />
            <TextField label="Promotion Method" source="promotionMethod" />
            <TextField label="Promotion Status" source="promotionStatus" />
            <TextField label="Promotion Type" source="promotionType" />
            <DateField source="startDate" label="Start Date" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
