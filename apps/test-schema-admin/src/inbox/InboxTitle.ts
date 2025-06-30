import { Inbox as TInbox } from "../api/inbox/Inbox";

export const INBOX_TITLE_FIELD = "senderName";

export const InboxTitle = (record: TInbox): string => {
  return record.senderName?.toString() || String(record.id);
};
