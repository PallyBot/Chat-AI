import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type SearchQueryCreateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  query?: string | null;
  results?: InputJsonValue;
};
