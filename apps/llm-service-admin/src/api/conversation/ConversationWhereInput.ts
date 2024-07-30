import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { SearchQueryListRelationFilter } from "../searchQuery/SearchQueryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConversationWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  searchQueries?: SearchQueryListRelationFilter;
  title?: StringNullableFilter;
  userId?: StringNullableFilter;
};
