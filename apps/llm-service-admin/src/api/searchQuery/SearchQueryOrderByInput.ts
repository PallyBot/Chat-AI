import { SortOrder } from "../../util/SortOrder";

export type SearchQueryOrderByInput = {
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  query?: SortOrder;
  results?: SortOrder;
  updatedAt?: SortOrder;
};
