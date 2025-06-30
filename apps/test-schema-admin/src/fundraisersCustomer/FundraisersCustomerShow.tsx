import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";
import { FUNDRAISERSSTATUS_TITLE_FIELD } from "../fundraisersStatus/FundraisersStatusTitle";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const FundraisersCustomerShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Fundraiser"
          source="fundraiser.id"
          reference="Fundraiser"
        >
          <TextField source={FUNDRAISER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Fundraisers Status"
          source="fundraisersstatus.id"
          reference="FundraisersStatus"
        >
          <TextField source={FUNDRAISERSSTATUS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="User Roles"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
