import { ActivityUpdateManyWithoutUserRolesInput } from "./ActivityUpdateManyWithoutUserRolesInput";
import { CategoryUpdateManyWithoutUserRolesInput } from "./CategoryUpdateManyWithoutUserRolesInput";
import { FundraiserUpdateManyWithoutUserRolesInput } from "./FundraiserUpdateManyWithoutUserRolesInput";
import { FundraisersCustomerUpdateManyWithoutUserRolesInput } from "./FundraisersCustomerUpdateManyWithoutUserRolesInput";
import { InboxUpdateManyWithoutUserRolesInput } from "./InboxUpdateManyWithoutUserRolesInput";
import { MessageUpdateManyWithoutUserRolesInput } from "./MessageUpdateManyWithoutUserRolesInput";
import { NotificationUpdateManyWithoutUserRolesInput } from "./NotificationUpdateManyWithoutUserRolesInput";
import { OrderUpdateManyWithoutUserRolesInput } from "./OrderUpdateManyWithoutUserRolesInput";
import { PostcodeUpdateManyWithoutUserRolesInput } from "./PostcodeUpdateManyWithoutUserRolesInput";
import { ProductUpdateManyWithoutUserRolesInput } from "./ProductUpdateManyWithoutUserRolesInput";
import { SubscriptionUpdateManyWithoutUserRolesInput } from "./SubscriptionUpdateManyWithoutUserRolesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleUpdateInput = {
  activities?: ActivityUpdateManyWithoutUserRolesInput;
  categories?: CategoryUpdateManyWithoutUserRolesInput;
  emailNotification?: boolean;
  enabled?: boolean;
  fundraisers?: FundraiserUpdateManyWithoutUserRolesInput;
  fundraisersFundraisersSupplierUuidToUserRoles?: FundraiserUpdateManyWithoutUserRolesInput;
  fundraiserscustomers?: FundraisersCustomerUpdateManyWithoutUserRolesInput;
  inboxReceiver?: InboxUpdateManyWithoutUserRolesInput;
  inboxSender?: InboxUpdateManyWithoutUserRolesInput;
  messages?: MessageUpdateManyWithoutUserRolesInput;
  notifications?: NotificationUpdateManyWithoutUserRolesInput;
  orders?: OrderUpdateManyWithoutUserRolesInput;
  postcodes?: PostcodeUpdateManyWithoutUserRolesInput;
  products?: ProductUpdateManyWithoutUserRolesInput;
  roles?:
    | "ADMIN"
    | "MANAGER"
    | "SUPPLIER"
    | "REFERRER"
    | "CUSTOMER"
    | "SUPERADMIN"
    | "SUPPLIERADMIN"
    | null;
  subscriptions?: SubscriptionUpdateManyWithoutUserRolesInput;
  supplier?: OrderUpdateManyWithoutUserRolesInput;
  users?: UserWhereUniqueInput | null;
};
