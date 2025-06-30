import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PromotionTitle } from "../promotion/PromotionTitle";

export const PromotionsProductCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Product Uuid" source="productUuid" />
        <ReferenceInput
          source="promotion.id"
          reference="Promotion"
          label="Promotion"
        >
          <SelectInput optionText={PromotionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
