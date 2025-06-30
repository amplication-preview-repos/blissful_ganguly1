import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ApiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Subscription Uuid" source="subscriptionUuid" />
      </SimpleForm>
    </Edit>
  );
};
