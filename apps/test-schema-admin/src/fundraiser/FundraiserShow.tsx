import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FUNDRAISER_TITLE_FIELD } from "./FundraiserTitle";
import { PROMOTION_TITLE_FIELD } from "../promotion/PromotionTitle";
import { FUNDRAISERSSTATUS_TITLE_FIELD } from "../fundraisersStatus/FundraisersStatusTitle";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";
import { ORDERSSTATUS_TITLE_FIELD } from "../ordersStatus/OrdersStatusTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { FUNDRAISERSIMAGE_TITLE_FIELD } from "../fundraisersImage/FundraisersImageTitle";
import { TOPIC_TITLE_FIELD } from "../topic/TopicTitle";

export const FundraiserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="End Date" source="endDate" />
        <ReferenceField
          label="Fundraisersimages"
          source="fundraisersimage.id"
          reference="FundraisersImage"
        >
          <TextField source={FUNDRAISERSIMAGE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Fundraisersstatus"
          source="fundraisersstatus.id"
          reference="FundraisersStatus"
        >
          <TextField source={FUNDRAISERSSTATUS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Link" source="link" />
        <TextField label="Postcode" source="postcode" />
        <TextField label="Start Date" source="startDate" />
        <BooleanField label="Subscribed" source="subscribed" />
        <TextField label="Suburb" source="suburb" />
        <TextField label="Target" source="target" />
        <TextField label="Title" source="title" />
        <TextField label="Topic" source="topic" />
        <ReferenceField label="Topics" source="topic.id" reference="Topic">
          <TextField source={TOPIC_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="User Roles"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="User Roles Fundraisers Supplier Uuid To User Roles"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="FundraisersPromotion"
          target="fundraiserUuid"
          label="FundraisersPromotions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Fundraisers"
              source="fundraiser.id"
              reference="Fundraiser"
            >
              <TextField source={FUNDRAISER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Promotions"
              source="promotion.id"
              reference="Promotion"
            >
              <TextField source={PROMOTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Source" source="source" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FundraisersCustomer"
          target="fundraiserUuid"
          label="FundraisersCustomers"
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
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Order"
          target="fundraiserUuid"
          label="Orders"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Additional" source="additional" />
            <TextField label="Address" source="address" />
            <BooleanField label="Atl" source="atl" />
            <TextField label="Billing Address" source="billingAddress" />
            <TextField label="Billing Country" source="billingCountry" />
            <TextField label="Billing Postcode" source="billingPostcode" />
            <TextField label="Billing State" source="billingState" />
            <TextField label="Billing Suburb" source="billingSuburb" />
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Delivery Address" source="deliveryAddress" />
            <TextField label="Delivery Country" source="deliveryCountry" />
            <TextField label="Delivery Postcode" source="deliveryPostcode" />
            <TextField label="Delivery State" source="deliveryState" />
            <TextField label="Delivery Suburb" source="deliverySuburb" />
            <TextField label="Email" source="email" />
            <TextField label="Fullname" source="fullname" />
            <ReferenceField
              label="Fundraiser"
              source="fundraiser.id"
              reference="Fundraiser"
            >
              <TextField source={FUNDRAISER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Fundraiser Total" source="fundraiserTotal" />
            <TextField label="ID" source="id" />
            <TextField label="Order Id" source="orderId" />
            <TextField label="Order Total" source="orderTotal" />
            <ReferenceField
              label="Ordersstatus"
              source="ordersstatus.id"
              reference="OrdersStatus"
            >
              <TextField source={ORDERSSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Phone" source="phone" />
            <TextField label="Postcode" source="postcode" />
            <TextField label="Profit" source="profit" />
            <TextField label="Shipping Total" source="shippingTotal" />
            <TextField label="State" source="state" />
            <TextField label="Suburb" source="suburb" />
            <ReferenceField
              label="Supplier"
              source="userrole.id"
              reference="UserRole"
            >
              <TextField source={USERROLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Support Notes" source="supportNotes" />
            <TextField label="Tracking" source="tracking" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="User Roles"
              source="userrole.id"
              reference="UserRole"
            >
              <TextField source={USERROLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FundraisersProduct"
          target="fundraiserUuid"
          label="FundraisersProducts"
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
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Product Price" source="productPrice" />
            <TextField label="Promotion Uuid" source="promotionUuid" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
