import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PromotionTitle } from "../promotion/PromotionTitle";

export const PromotionsProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
