import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PROMOTION_TITLE_FIELD } from "../promotion/PromotionTitle";

export const PromotionsProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
