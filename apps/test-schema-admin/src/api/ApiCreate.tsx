import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ApiCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Subscription Uuid" source="subscriptionUuid" />
      </SimpleForm>
    </Create>
  );
};
