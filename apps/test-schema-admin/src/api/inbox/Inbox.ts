import { UserRole } from "../userRole/UserRole";

export type Inbox = {
  body: string;
  conversationUuid: string;
  createdAt: Date;
  history: number;
  id: string;
  image: string | null;
  inboxReceiver?: UserRole | null;
  inboxSender?: UserRole | null;
  isRead: boolean;
  isReply: boolean;
  senderEmail: string;
  senderName: string;
  subject: string;
  updatedAt: Date;
};
