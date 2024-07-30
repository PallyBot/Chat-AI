import { Message } from "../message/Message";
import { SearchQuery } from "../searchQuery/SearchQuery";

export type Conversation = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  searchQueries?: Array<SearchQuery>;
  title: string | null;
  updatedAt: Date;
  userId: string | null;
};
