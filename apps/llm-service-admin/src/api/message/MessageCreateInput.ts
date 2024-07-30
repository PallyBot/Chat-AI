import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  role?: string | null;
};
