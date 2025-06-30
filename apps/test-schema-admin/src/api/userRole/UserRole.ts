import { Activity } from "../activity/Activity";
import { Category } from "../category/Category";
import { Fundraiser } from "../fundraiser/Fundraiser";
import { FundraisersCustomer } from "../fundraisersCustomer/FundraisersCustomer";
import { Inbox } from "../inbox/Inbox";
import { Message } from "../message/Message";
import { Notification } from "../notification/Notification";
import { Order } from "../order/Order";
import { Postcode } from "../postcode/Postcode";
import { Product } from "../product/Product";
import { Subscription } from "../subscription/Subscription";
import { User } from "../user/User";

export type UserRole = {
  activities?: Array<Activity>;
  categories?: Array<Category>;
  createdAt: Date;
  emailNotification: boolean;
  enabled: boolean;
  fundraisers?: Array<Fundraiser>;
  fundraisersFundraisersSupplierUuidToUserRoles?: Array<Fundraiser>;
  fundraiserscustomers?: Array<FundraisersCustomer>;
  id: string;
  inboxReceiver?: Array<Inbox>;
  inboxSender?: Array<Inbox>;
  messages?: Array<Message>;
  notifications?: Array<Notification>;
  orders?: Array<Order>;
  postcodes?: Array<Postcode>;
  products?: Array<Product>;
  roles?:
    | "ADMIN"
    | "MANAGER"
    | "SUPPLIER"
    | "REFERRER"
    | "CUSTOMER"
    | "SUPERADMIN"
    | "SUPPLIERADMIN"
    | null;
  subscriptions?: Array<Subscription>;
  supplier?: Array<Order>;
  updatedAt: Date;
  users?: User | null;
};
