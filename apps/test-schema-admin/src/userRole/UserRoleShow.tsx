import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  BooleanField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USERROLE_TITLE_FIELD } from "./UserRoleTitle";
import { CATEGORIESIMAGE_TITLE_FIELD } from "../categoriesImage/CategoriesImageTitle";
import { FUNDRAISERSIMAGE_TITLE_FIELD } from "../fundraisersImage/FundraisersImageTitle";
import { FUNDRAISERSSTATUS_TITLE_FIELD } from "../fundraisersStatus/FundraisersStatusTitle";
import { TOPIC_TITLE_FIELD } from "../topic/TopicTitle";
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";
import { ORDERSSTATUS_TITLE_FIELD } from "../ordersStatus/OrdersStatusTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserRoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="Email Notification" source="emailNotification" />
        <BooleanField label="Enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Activity"
          target="userUuid"
          label="Activities"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Activity Status" source="activityStatus" />
            <TextField label="Assigned" source="assigned" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="dueDate" label="Due Date" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Link" source="link" />
            <TextField label="Link Drawer" source="linkDrawer" />
            <TextField label="Link Name" source="linkName" />
            <TextField label="Link Uuid" source="linkUuid" />
            <TextField label="Text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="User Name" source="userName" />
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
          reference="Category"
          target="supplierUuid"
          label="Categories"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Image"
              source="categoriesimage.id"
              reference="CategoriesImage"
            >
              <TextField source={CATEGORIESIMAGE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Quick Starter" source="quickStarter" />
            <TextField label="Title" source="title" />
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
          reference="Fundraiser"
          target="userUuid"
          label="Fundraisers"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Fundraiser"
          target="supplierUuid"
          label="Fundraisers"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FundraisersCustomer"
          target="usersUuid"
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
          reference="Inbox"
          target="receiverUuid"
          label="Inboxes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Body" source="body" />
            <TextField label="Conversation Uuid" source="conversationUuid" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="History" source="history" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <ReferenceField
              label="Inbox Receiver"
              source="userrole.id"
              reference="UserRole"
            >
              <TextField source={USERROLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Inbox Sender"
              source="userrole.id"
              reference="UserRole"
            >
              <TextField source={USERROLE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Is Read" source="isRead" />
            <BooleanField label="Is Reply" source="isReply" />
            <TextField label="Sender Email" source="senderEmail" />
            <TextField label="Sender Name" source="senderName" />
            <TextField label="Subject" source="subject" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Inbox"
          target="senderUuid"
          label="Inboxes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Body" source="body" />
            <TextField label="Conversation Uuid" source="conversationUuid" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="History" source="history" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <ReferenceField
              label="Inbox Receiver"
              source="userrole.id"
              reference="UserRole"
            >
              <TextField source={USERROLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Inbox Sender"
              source="userrole.id"
              reference="UserRole"
            >
              <TextField source={USERROLE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Is Read" source="isRead" />
            <BooleanField label="Is Reply" source="isReply" />
            <TextField label="Sender Email" source="senderEmail" />
            <TextField label="Sender Name" source="senderName" />
            <TextField label="Subject" source="subject" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="userUuid"
          label="Messages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Assigned" source="assigned" />
            <TextField label="Channel" source="channel" />
            <TextField label="Channel Uuid" source="channelUuid" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Private" source="isPrivate" />
            <BooleanField label="Is Read" source="isRead" />
            <TextField label="Text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="User Name" source="userName" />
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
          reference="Notification"
          target="userUuid"
          label="Notifications"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <BooleanField label="Is Read" source="isRead" />
            <TextField label="Link" source="link" />
            <TextField label="Link Name" source="linkName" />
            <TextField label="Name" source="name" />
            <TextField label="Target" source="target" />
            <TextField label="Text" source="text" />
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
        <ReferenceManyField reference="Order" target="userUuid" label="Orders">
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
          reference="Postcode"
          target="userRolesUuid"
          label="Postcodes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Metro" source="metro" />
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
          reference="Product"
          target="supplierUuid"
          label="Products"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Active" source="active" />
            <TextField
              label="Adjusted Supplier Price"
              source="adjustedSupplierPrice"
            />
            <TextField label="Alcohol" source="alcohol" />
            <BooleanField label="Approved" source="approved" />
            <BooleanField label="Archived" source="archived" />
            <TextField label="Case Size" source="caseSize" />
            <TextField label="Closure" source="closure" />
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Fundraiser Uuid" source="fundraiserUuid" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Max Price" source="maxPrice" />
            <TextField label="Max Qty" source="maxQty" />
            <TextField label="Min Price" source="minPrice" />
            <TextField label="Min Qty" source="minQty" />
            <TextField label="Name" source="name" />
            <TextField label="Price" source="price" />
            <TextField label="Producer" source="producer" />
            <TextField label="Region" source="region" />
            <TextField label="Sku" source="sku" />
            <TextField label="State" source="state" />
            <TextField label="Status" source="status" />
            <TextField label="Stock" source="stock" />
            <TextField label="Stock Alert" source="stockAlert" />
            <TextField label="Stockact" source="stockact" />
            <TextField label="Stocknsw" source="stocknsw" />
            <TextField label="Stocknt" source="stocknt" />
            <TextField label="Stockqld" source="stockqld" />
            <TextField label="Stocksa" source="stocksa" />
            <TextField label="Stocktas" source="stocktas" />
            <TextField label="Stockvic" source="stockvic" />
            <TextField label="Stockwa" source="stockwa" />
            <TextField label="Supplier Price" source="supplierPrice" />
            <BooleanField label="Touched" source="touched" />
            <TextField label="Type Field" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="User Roles"
              source="userrole.id"
              reference="UserRole"
            >
              <TextField source={USERROLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Uuid" source="uuid" />
            <TextField label="Varietal" source="varietal" />
            <TextField label="Vintage" source="vintage" />
            <TextField label="Volume" source="volume" />
            <TextField label="Wholesale Price" source="wholesalePrice" />
            <TextField label="Winemaker" source="winemaker" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Subscription"
          target="userRolesUuid"
          label="Subscriptions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Access" source="access" />
            <TextField label="Alt" source="alt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
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
          target="supplierUuid"
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
      </SimpleShowLayout>
    </Show>
  );
};
