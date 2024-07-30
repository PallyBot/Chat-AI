import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type SearchQueryUpdateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  query?: string | null;
  results?: InputJsonValue;
};
