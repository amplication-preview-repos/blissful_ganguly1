import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";
import { FUNDRAISERSSTATUS_TITLE_FIELD } from "../fundraisersStatus/FundraisersStatusTitle";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const FundraisersCustomerList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FundraisersCustomers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
