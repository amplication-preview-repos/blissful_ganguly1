import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PromotionsProductTitle } from "../promotionsProduct/PromotionsProductTitle";
import { FundraisersPromotionTitle } from "../fundraisersPromotion/FundraisersPromotionTitle";
import { PromotionsImageTitle } from "../promotionsImage/PromotionsImageTitle";

export const PromotionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="categoriesproducts"
          reference="PromotionsProduct"
        >
          <SelectArrayInput
            optionText={PromotionsProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="Discount" source="discount" />
        <TextInput label="Excerpt" source="excerpt" />
        <ReferenceArrayInput
          source="fundraisersPromotions"
          reference="FundraisersPromotion"
        >
          <SelectArrayInput
            optionText={FundraisersPromotionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="image.id"
          reference="PromotionsImage"
          label="Image"
        >
          <SelectInput optionText={PromotionsImageTitle} />
        </ReferenceInput>
        <NumberInput label="Max" source="max" />
        <NumberInput label="Min" source="min" />
        <TextInput label="Name" source="name" />
        <SelectInput
          source="promotionMethod"
          label="Promotion Method"
          choices={[
            { label: "DOLLAR", value: "DOLLAR" },
            { label: "PERCENTAGE", value: "PERCENTAGE" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="promotionStatus"
          label="Promotion Status"
          choices={[
            { label: "ACTIVE", value: "ACTIVE" },
            { label: "INACTIVE", value: "INACTIVE" },
            { label: "EXPIRES_SOON", value: "EXPIRES_SOON" },
            { label: "EXPIRED", value: "EXPIRED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="promotionType"
          label="Promotion Type"
          choices={[
            { label: "FUNDRAISER", value: "FUNDRAISER" },
            { label: "PARTNER", value: "PARTNER" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
