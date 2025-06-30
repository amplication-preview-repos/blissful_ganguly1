import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PROMOTION_TITLE_FIELD } from "./PromotionTitle";
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";
import { PROMOTIONSIMAGE_TITLE_FIELD } from "../promotionsImage/PromotionsImageTitle";

export const PromotionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="PromotionsProduct"
          target="promotionUuid"
          label="PromotionsProducts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Product Uuid" source="productUuid" />
            <ReferenceField
              label="Promotion"
              source="promotion.id"
              reference="Promotion"
            >
              <TextField source={PROMOTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FundraisersPromotion"
          target="promotionUuid"
          label="FundraisersPromotions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Fundraisers"
              source="fundraiser.id"
              reference="Fundraiser"
            >
              <TextField source={FUNDRAISER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Promotions"
              source="promotion.id"
              reference="Promotion"
            >
              <TextField source={PROMOTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Source" source="source" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
