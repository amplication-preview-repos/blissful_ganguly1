import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "linkName";

export const NotificationTitle = (record: TNotification): string => {
  return record.linkName?.toString() || String(record.id);
};
