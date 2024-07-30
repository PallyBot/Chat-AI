import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";
import { SearchQueryUpdateManyWithoutConversationsInput } from "./SearchQueryUpdateManyWithoutConversationsInput";

export type ConversationUpdateInput = {
  messages?: MessageUpdateManyWithoutConversationsInput;
  searchQueries?: SearchQueryUpdateManyWithoutConversationsInput;
  title?: string | null;
  userId?: string | null;
};
