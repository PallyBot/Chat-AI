import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SearchQueryWhereInput = {
  conversation?: ConversationWhereUniqueInput;
  id?: StringFilter;
  query?: StringNullableFilter;
  results?: JsonFilter;
};
