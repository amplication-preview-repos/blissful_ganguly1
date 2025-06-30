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
import { PROMOTIONSIMAGE_TITLE_FIELD } from "../promotionsImage/PromotionsImageTitle";

export const PromotionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Promotions"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
