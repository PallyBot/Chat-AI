import { Conversation } from "../conversation/Conversation";
import { JsonValue } from "type-fest";

export type SearchQuery = {
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  query: string | null;
  results: JsonValue;
  updatedAt: Date;
};
