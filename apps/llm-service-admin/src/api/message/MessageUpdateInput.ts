import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  role?: string | null;
};
