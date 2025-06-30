import { ActivityCreateNestedManyWithoutUserRolesInput } from "./ActivityCreateNestedManyWithoutUserRolesInput";
import { CategoryCreateNestedManyWithoutUserRolesInput } from "./CategoryCreateNestedManyWithoutUserRolesInput";
import { FundraiserCreateNestedManyWithoutUserRolesInput } from "./FundraiserCreateNestedManyWithoutUserRolesInput";
import { FundraisersCustomerCreateNestedManyWithoutUserRolesInput } from "./FundraisersCustomerCreateNestedManyWithoutUserRolesInput";
import { InboxCreateNestedManyWithoutUserRolesInput } from "./InboxCreateNestedManyWithoutUserRolesInput";
import { MessageCreateNestedManyWithoutUserRolesInput } from "./MessageCreateNestedManyWithoutUserRolesInput";
import { NotificationCreateNestedManyWithoutUserRolesInput } from "./NotificationCreateNestedManyWithoutUserRolesInput";
import { OrderCreateNestedManyWithoutUserRolesInput } from "./OrderCreateNestedManyWithoutUserRolesInput";
import { PostcodeCreateNestedManyWithoutUserRolesInput } from "./PostcodeCreateNestedManyWithoutUserRolesInput";
import { ProductCreateNestedManyWithoutUserRolesInput } from "./ProductCreateNestedManyWithoutUserRolesInput";
import { SubscriptionCreateNestedManyWithoutUserRolesInput } from "./SubscriptionCreateNestedManyWithoutUserRolesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleCreateInput = {
  activities?: ActivityCreateNestedManyWithoutUserRolesInput;
  categories?: CategoryCreateNestedManyWithoutUserRolesInput;
  emailNotification: boolean;
  enabled: boolean;
  fundraisers?: FundraiserCreateNestedManyWithoutUserRolesInput;
  fundraisersFundraisersSupplierUuidToUserRoles?: FundraiserCreateNestedManyWithoutUserRolesInput;
  fundraiserscustomers?: FundraisersCustomerCreateNestedManyWithoutUserRolesInput;
  inboxReceiver?: InboxCreateNestedManyWithoutUserRolesInput;
  inboxSender?: InboxCreateNestedManyWithoutUserRolesInput;
  messages?: MessageCreateNestedManyWithoutUserRolesInput;
  notifications?: NotificationCreateNestedManyWithoutUserRolesInput;
  orders?: OrderCreateNestedManyWithoutUserRolesInput;
  postcodes?: PostcodeCreateNestedManyWithoutUserRolesInput;
  products?: ProductCreateNestedManyWithoutUserRolesInput;
  roles?:
    | "ADMIN"
    | "MANAGER"
    | "SUPPLIER"
    | "REFERRER"
    | "CUSTOMER"
    | "SUPERADMIN"
    | "SUPPLIERADMIN"
    | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutUserRolesInput;
  supplier?: OrderCreateNestedManyWithoutUserRolesInput;
  users?: UserWhereUniqueInput | null;
};
