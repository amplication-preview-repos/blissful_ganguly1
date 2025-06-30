import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";

export type InboxWhereInput = {
  body?: StringFilter;
  conversationUuid?: StringFilter;
  createdAt?: DateTimeFilter;
  history?: IntFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  inboxReceiver?: UserRoleWhereUniqueInput;
  inboxSender?: UserRoleWhereUniqueInput;
  isRead?: BooleanFilter;
  isReply?: BooleanFilter;
  senderEmail?: StringFilter;
  senderName?: StringFilter;
  subject?: StringFilter;
  updatedAt?: DateTimeFilter;
};
