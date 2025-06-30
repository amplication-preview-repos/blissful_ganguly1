import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "alt";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.alt?.toString() || String(record.id);
};
