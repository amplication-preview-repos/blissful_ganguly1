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
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const FundraisersProductList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FundraisersProducts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Discount" source="discount" />
        <TextField label="Fundraiser Price" source="fundraiserPrice" />
        <TextField
          label="Fundraiser Promotion Uuid"
          source="fundraiserPromotionUuid"
        />
        <ReferenceField
          label="Fundraisers"
          source="fundraiser.id"
          reference="Fundraiser"
        >
          <TextField source={FUNDRAISER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Product Price" source="productPrice" />
        <TextField label="Promotion Uuid" source="promotionUuid" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
