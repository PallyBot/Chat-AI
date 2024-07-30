import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";
import { SearchQueryCreateNestedManyWithoutConversationsInput } from "./SearchQueryCreateNestedManyWithoutConversationsInput";

export type ConversationCreateInput = {
  messages?: MessageCreateNestedManyWithoutConversationsInput;
  searchQueries?: SearchQueryCreateNestedManyWithoutConversationsInput;
  title?: string | null;
  userId?: string | null;
};
