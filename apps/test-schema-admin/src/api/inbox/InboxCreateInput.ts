import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type InboxCreateInput = {
  body: string;
  conversationUuid: string;
  history: number;
  image?: string | null;
  inboxReceiver?: UserRoleWhereUniqueInput | null;
  inboxSender?: UserRoleWhereUniqueInput | null;
  isRead: boolean;
  isReply: boolean;
  senderEmail: string;
  senderName: string;
  subject: string;
};
