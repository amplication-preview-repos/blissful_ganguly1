import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";
import { PROMOTION_TITLE_FIELD } from "../promotion/PromotionTitle";

export const FundraisersPromotionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
