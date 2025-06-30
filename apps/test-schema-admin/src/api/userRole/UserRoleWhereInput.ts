import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { FundraiserListRelationFilter } from "../fundraiser/FundraiserListRelationFilter";
import { FundraisersCustomerListRelationFilter } from "../fundraisersCustomer/FundraisersCustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InboxListRelationFilter } from "../inbox/InboxListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { PostcodeListRelationFilter } from "../postcode/PostcodeListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleWhereInput = {
  activities?: ActivityListRelationFilter;
  categories?: CategoryListRelationFilter;
  createdAt?: DateTimeFilter;
  emailNotification?: BooleanFilter;
  enabled?: BooleanFilter;
  fundraisers?: FundraiserListRelationFilter;
  fundraisersFundraisersSupplierUuidToUserRoles?: FundraiserListRelationFilter;
  fundraiserscustomers?: FundraisersCustomerListRelationFilter;
  id?: StringFilter;
  inboxReceiver?: InboxListRelationFilter;
  inboxSender?: InboxListRelationFilter;
  messages?: MessageListRelationFilter;
  notifications?: NotificationListRelationFilter;
  orders?: OrderListRelationFilter;
  postcodes?: PostcodeListRelationFilter;
  products?: ProductListRelationFilter;
  roles?:
    | "ADMIN"
    | "MANAGER"
    | "SUPPLIER"
    | "REFERRER"
    | "CUSTOMER"
    | "SUPERADMIN"
    | "SUPPLIERADMIN";
  subscriptions?: SubscriptionListRelationFilter;
  supplier?: OrderListRelationFilter;
  updatedAt?: DateTimeFilter;
  users?: UserWhereUniqueInput;
};
