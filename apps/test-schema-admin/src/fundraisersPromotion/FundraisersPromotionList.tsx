import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";
import { PROMOTION_TITLE_FIELD } from "../promotion/PromotionTitle";

export const FundraisersPromotionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FundraisersPromotions"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
