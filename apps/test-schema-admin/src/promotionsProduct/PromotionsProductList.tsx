import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROMOTION_TITLE_FIELD } from "../promotion/PromotionTitle";

export const PromotionsProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PromotionsProducts"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
