import { SortOrder } from "../../util/SortOrder";

export type InboxOrderByInput = {
  body?: SortOrder;
  conversationUuid?: SortOrder;
  createdAt?: SortOrder;
  history?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  receiverUuid?: SortOrder;
  senderUuid?: SortOrder;
  isRead?: SortOrder;
  isReply?: SortOrder;
  senderEmail?: SortOrder;
  senderName?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
