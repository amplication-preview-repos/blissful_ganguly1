import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FundraiserTitle } from "../fundraiser/FundraiserTitle";
import { ProductTitle } from "../product/ProductTitle";

export const FundraisersProductEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Discount" source="discount" />
        <NumberInput label="Fundraiser Price" source="fundraiserPrice" />
        <TextInput
          label="Fundraiser Promotion Uuid"
          source="fundraiserPromotionUuid"
        />
        <ReferenceInput
          source="fundraisers.id"
          reference="Fundraiser"
          label="Fundraisers"
        >
          <SelectInput optionText={FundraiserTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput label="Product Price" source="productPrice" />
        <TextInput label="Promotion Uuid" source="promotionUuid" />
      </SimpleForm>
    </Edit>
  );
};
